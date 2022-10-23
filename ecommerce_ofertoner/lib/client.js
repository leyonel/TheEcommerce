import sanityClient from '@santy/client';
import imageUrlBuilder from '@sanity/image-url'; 

export const client = sanityClient({
    proyectId: 'gg3zdbwx',
    dataset: 'production',
    apiVersion: '2022-10-23',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);