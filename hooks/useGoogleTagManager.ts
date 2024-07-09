import * as gtag from '../lib/gtag'

import { url } from 'inspector'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function useGoogleTagManager() {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
