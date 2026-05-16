import { createClient } from '@sanity/client';
import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID, SANITY_USECDN } from '../config/config';

export const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    useCdn: SANITY_USECDN,
    apiVersion: SANITY_API_VERSION
});