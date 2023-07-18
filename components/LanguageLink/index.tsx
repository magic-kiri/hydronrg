import './LanguageLink.css'

import React from 'react'
import Link from 'next-intl/link'
import { useLocale } from 'next-intl'
import { usePathname } from 'next-intl/client'

interface Props {
  locale: string
  lang?: string
}

export default function LanguageLink({locale, lang}: Props) {
  const currentLocale = useLocale()
  const pathname = usePathname()

  return (
    <Link 
      className={`language__link ${currentLocale == locale ? 'current' : ''}`}
      href={pathname}
      locale={locale}
    >
      {lang ?? locale}
    </Link>
  )
}
