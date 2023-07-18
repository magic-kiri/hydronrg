'use client'

import { useRouter } from 'next-intl/client'

import { useIsomorphicLayoutEffect } from '@/helper/useIsomorphicLayoutEffect'

export default function RedirectPage() {
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    router.push('/home')
  }, [])

  return <></>
}
