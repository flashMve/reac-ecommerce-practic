import  sanityClient  from '@sanity/client';
import  imageUrlBuilder  from '@sanity/image-url';


export const client = sanityClient(
    {
        useCdn:true,
        projectId:'oq2ipkhz',
        dataset:'production',
        apiVersion:'2022-03-10',
        token:process.env.SANITY_CLIENT_API_KEY,
    }
);

const buildImage = imageUrlBuilder(client);

export  function  urlFor(source) {
    return buildImage.image(source);
}