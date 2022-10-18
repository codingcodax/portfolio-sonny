import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const NEXT_PUBLIC_SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const NEXT_PUBLIC_SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const NODE_ENV = process.env.NODE_ENV;

export const config = {
  dataset: NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2021-10-21',
  useCdn: NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);
