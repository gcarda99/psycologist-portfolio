import React from 'react';
import {PassThrough} from 'node:stream';
import {renderToPipeableStream} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import {HelmetProvider} from 'react-helmet-async';
import {ThemeProvider, createTheme} from '@mui/material/styles';

import {AppContent} from './App';
import ThemeContextProvider from './contexts/ThemeContext';

const muiTheme = createTheme();

export function render(url) {
    return new Promise((resolve, reject) => {
        let settled = false;
        let renderError;
        let timeout;

        const finishWithError = (error) => {
            if (settled) {
                return;
            }

            settled = true;
            clearTimeout(timeout);
            reject(error);
        };

        const {pipe, abort} = renderToPipeableStream(
            <HelmetProvider>
                <ThemeContextProvider>
                    <ThemeProvider theme={muiTheme}>
                        <StaticRouter location={url}>
                            <AppContent/>
                        </StaticRouter>
                    </ThemeProvider>
                </ThemeContextProvider>
            </HelmetProvider>,
            {
                onAllReady() {
                    const output = new PassThrough();
                    let html = '';

                    output.setEncoding('utf8');
                    output.on('data', (chunk) => {
                        html += chunk;
                    });
                    output.on('end', () => {
                        if (settled) {
                            return;
                        }

                        if (renderError) {
                            finishWithError(renderError);
                            return;
                        }

                        settled = true;
                        clearTimeout(timeout);
                        resolve(html);
                    });
                    output.on('error', finishWithError);

                    pipe(output);
                },
                onShellError: finishWithError,
                onError(error) {
                    renderError ??= error;
                    console.error('Errore durante il prerendering:', error);
                }
            }
        );

        timeout = setTimeout(() => {
            abort();
            finishWithError(new Error(`Timeout durante il prerendering di ${url}`));
        }, 30000);
    });
}
