import './SupportCard.css'

import React from 'react'
import Image from 'next/image'

interface Props {
  icon: string
  label: string
}

export default function SupportCard({ icon, label }: Props) {
  return (
    <div className='support__card'>
      <div className="image">
        <Image src={icon} alt={''} fill />
      </div>

      <span className="divider" />

      <p>
        {label}
      </p>
    </div>
  )
}
