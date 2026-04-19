import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 'sa1bj9p5',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2026-04-18'
});