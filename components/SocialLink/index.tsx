import './SocialLink.css'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  icon: string
  href: string
}

export default function SocialLink({ icon, href }: Props) {
  return (
    <Link
      className='social__link'
      href={href}
    >
      <div className="wrapper">
        <Image src={icon} alt={''} fill />
      </div>
    </Link>
  )
}
