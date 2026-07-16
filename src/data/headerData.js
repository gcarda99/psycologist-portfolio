import landing from '../assets/webp/landing.webp'
import {professionalData} from './professionalData'

export const headerData = {
    name: professionalData.displayName,
    title: professionalData.shortTitle,
    description: "\"Non giudicare ogni giorno dal raccolto che raccogli, ma dai semi che pianti.\"",
    image: landing,
    resumeName: `CV - ${professionalData.name}`
}
