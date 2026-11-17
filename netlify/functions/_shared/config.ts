/**
 * Every setting the API cannot run without.
 *
 * Without this check a missing variable surfaces as an uncaught throw deep
 * inside the S3 client, which Netlify turns into a bare 502 with nothing to go
 * on. Checking up front turns that into a message naming what to set.
 */
const REQUIRED = [
  'R2_ENDPOINT_URL',
  'R2_ACCESS_KEY_ID',
  'R2_SECRET_ACCESS_KEY',
  'R2_BUCKET_NAME',
  'R2_PROJECT_FOLDER',
  // Required, not optional: a deployed site that falls back to a built-in
  // signing key would let anyone mint a valid session cookie.
  'SESSION_SECRET',
] as const

export function missingConfig(): string[] {
  return REQUIRED.filter((key) => !process.env[key]?.trim())
}

/**
 * A 503 naming the missing variables, or null when everything is present.
 * Only names are reported, never values.
 */
export function configError(): Response | null {
  const missing = missingConfig()
  if (missing.length === 0) return null

  return Response.json(
    {
      error:
        `The server is not configured yet: ${missing.join(', ')} ` +
        `${missing.length === 1 ? 'is' : 'are'} not set. ` +
        `Add them under Site configuration → Environment variables in Netlify, then redeploy.`,
      missing,
    },
    { status: 503 }
  )
}
