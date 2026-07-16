import {mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {promisify} from 'node:util';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {brotliCompress, gzip} from 'node:zlib';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDirectory = path.join(projectRoot, 'build');
const serverBuildDirectory = path.join(projectRoot, '.prerender');
const templatePath = path.join(buildDirectory, 'index.html');
const gzipAsync = promisify(gzip);
const brotliCompressAsync = promisify(brotliCompress);

const routes = [
    {
        path: '/',
        outputs: ['index.html']
    },
    {
        path: '/info-legale',
        outputs: ['info-legale.html', path.join('info-legale', 'index.html')],
        head: {
            title: 'Privacy Policy | Dott.ssa Mariaelisabetta Albano',
            description: 'Informativa sul trattamento dei dati personali e sull\'utilizzo di Google Analytics nel sito della Dott.ssa Mariaelisabetta Albano.',
            canonical: 'https://www.psicologalbano.it/info-legale',
            removeStructuredDataTypes: ['FAQPage']
        }
    }
];

const escapeAttribute = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;');

const replaceMetaContent = (html, attribute, key, value) => {
    const pattern = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/?>`, 'i');
    return html.replace(pattern, `<meta ${attribute}="${key}" content="${escapeAttribute(value)}"/>`);
};

const removeStructuredData = (html, types) => html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    (script, json) => {
        const structuredData = JSON.parse(json);
        return types.includes(structuredData['@type']) ? '' : script;
    }
);

const applyHead = (html, head) => {
    if (!head) {
        return html;
    }

    let document = html
        .replace(/<title>[\s\S]*?<\/title>/i, `<title>${head.title}</title>`)
        .replace(
            /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
            `<link rel="canonical" href="${head.canonical}"/>`
        );

    document = replaceMetaContent(document, 'name', 'description', head.description);
    document = replaceMetaContent(document, 'property', 'og:url', head.canonical);
    document = replaceMetaContent(document, 'property', 'og:title', head.title);
    document = replaceMetaContent(document, 'property', 'og:description', head.description);
    document = replaceMetaContent(document, 'name', 'twitter:title', head.title);
    document = replaceMetaContent(document, 'name', 'twitter:description', head.description);

    return removeStructuredData(document, head.removeStructuredDataTypes || []);
};

try {
    const serverEntry = pathToFileURL(path.join(serverBuildDirectory, 'entry-server.js')).href;
    const {render} = await import(serverEntry);
    const template = await readFile(templatePath, 'utf8');

    if (!template.includes('<div id="root"></div>')) {
        throw new Error('Il template client non contiene il nodo root vuoto previsto.');
    }

    for (const route of routes) {
        const appHtml = await render(route.path);
        const rootMarkup = `<div id="root" data-prerendered-path="${escapeAttribute(route.path)}">${appHtml}</div>`;
        const document = applyHead(
            template.replace('<div id="root"></div>', rootMarkup),
            route.head
        );
        const documentBuffer = Buffer.from(document);
        const [gzipDocument, brotliDocument] = await Promise.all([
            gzipAsync(documentBuffer),
            brotliCompressAsync(documentBuffer)
        ]);

        for (const output of route.outputs) {
            const outputPath = path.join(buildDirectory, output);

            await mkdir(path.dirname(outputPath), {recursive: true});
            await Promise.all([
                writeFile(outputPath, document),
                writeFile(`${outputPath}.gz`, gzipDocument),
                writeFile(`${outputPath}.br`, brotliDocument)
            ]);
            console.log(`Prerendered ${route.path} -> build/${output.replaceAll('\\', '/')}`);
        }
    }
} finally {
    await rm(serverBuildDirectory, {recursive: true, force: true});
}
