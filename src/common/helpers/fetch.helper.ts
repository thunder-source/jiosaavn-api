import type { Endpoints } from '#common/constants'

type EndpointValue = (typeof Endpoints)[keyof typeof Endpoints]

export const useFetch = async <T>({
  endpoint,
  params,
  context
}: {
  endpoint: EndpointValue
  params: Record<string, string | number>
  context?: 'android' | 'web6dot0'
}): Promise<{ data: T; ok: Response['ok'] }> => {
  const url = new URL('https://www.jiosaavn.com/api.php')

  url.searchParams.append('__call', endpoint.toString())
  url.searchParams.append('_format', 'json')
  url.searchParams.append('_marker', '0')
  url.searchParams.append('api_version', '4')
  url.searchParams.append('ctx', context || 'web6dot0')

  Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])))

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
      Origin: 'https://www.jiosaavn.com',
      Referer: 'https://www.jiosaavn.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      DNT: '1',
      'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"macOS"'
    },
    // Add timeout and retry logic
    signal: AbortSignal.timeout(10000) // 10 second timeout
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('API Error Response:', errorText)
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
  }

  try {
    const data = await response.json()
    return { data: data as T, ok: response.ok }
  } catch (error) {
    console.error('Failed to parse JSON response:', error)
    throw new Error('Failed to parse JSON response from API')
  }
}
