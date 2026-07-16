import {professionalData} from './professionalData'

export const contactsData = {
    whatsapp: professionalData.whatsapp,
    email: professionalData.email,
    phone: professionalData.phone,
    addresses: [
        {
            id: 'mercato-san-severino',
            type: 'studio',
            locationName: 'Meta Studio APS',
            relationship: 'Presso Meta Studio APS:',
            label: 'Via Carmine Amato, 1/24, 84085 Mercato San Severino (SA)',
            googleMapsUrl: 'https://maps.app.goo.gl/YkpeMDmYMswDH8U18'
        },
        {
            id: 'castel-san-giorgio',
            type: 'studio',
            locationName: 'SalutePsy',
            relationship: 'Presso SalutePsy:',
            label: 'Via Palmiro Togliatti, 21, 84083 Castel San Giorgio (SA)',
            googleMapsUrl: 'https://maps.app.goo.gl/8v5y6kNmY6RcDqY38'
        },
        {
            id: 'online',
            type: 'online',
            label: 'Sedute anche Online'
        }
    ]
}