
import './ButtonLink.css'

import React from 'react'
import Link from 'next-intl/link'

interface Props {
  href: string
  children: React.ReactNode
}

export default function ButtonLink({ href, children }: Props) {
  return (
    <Link
      className='button__link'
      href={href}
    >
      {children}
    </Link>
  )
}
