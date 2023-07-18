import './ProductLink.css'

import React from 'react'
import Image from 'next/image'
import Link from 'next-intl/link'

interface Props {
  href: string
  image: string
  label: string
  children?: React.ReactNode
}

export default function ProductLink({ href, image, label, children }: Props) {
  return (
    <Link
      className={`product__link ${children != null ? 'full': ''}`}
      href={href}
    >
      {children && (
        <div className='child_wrapper'>
          {children}
        </div>
      )}

      <div className="icon">
        <Image src={image} alt={''} fill />
      </div>

      <h3>
        {label}
      </h3>
    </Link>
  )
}
