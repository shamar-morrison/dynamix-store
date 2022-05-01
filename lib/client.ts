import SanityClient, { ClientConfig } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = SanityClient({
  projectId: 'sqxew3pm',
  dataset: 'production',
  apiVersion: '2022-04-30',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
} as ClientConfig);

const builder = ImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
