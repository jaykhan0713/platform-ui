/* For client components, used to redirect to sign-in if user tries to access something
 * and their token is expired.
 */
export async function apiFetch(url: string, options?: RequestInit): Promise<Response> {
  const res = await fetch(url, options)
  if (res.status === 401) {
    window.location.href = "/api/auth/sign-in"
  }
  return res
}
