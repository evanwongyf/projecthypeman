import { S3Client } from '@aws-sdk/client-s3'

// Same R2 account + credentials as the other apps (studytubby, onesecstudio).
// Isolation is by folder prefix: R2_PROJECT_FOLDER=projecthypeman.
export const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT_URL,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
  // R2 serves either addressing style. Only set this to talk to a local
  // S3 stand-in (e.g. MinIO / moto) that requires path-style requests.
  forcePathStyle: process.env.R2_FORCE_PATH_STYLE === 'true',
})

export const R2_BUCKET = process.env.R2_BUCKET_NAME!
export const R2_PROJECT_FOLDER = process.env.R2_PROJECT_FOLDER!

export function r2Key(...parts: string[]) {
  return [R2_PROJECT_FOLDER, ...parts].join('/')
}
