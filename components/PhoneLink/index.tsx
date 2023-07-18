import './PhoneLink.css'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Phone {
  phone: string
  name: string
}

interface Props {
  icon: string
  phones: Phone[]
}

export default function PhoneLink({ icon, phones }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function togglePhones() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="phone__link" onClick={togglePhones}>
      <div className="wrapper">
        <Image src={icon} alt={''} fill />
      </div>

      <div className={`phones__list ${isOpen ? 'opend' : ''}`}>
        {
          phones.map(phone => (
            <Link
              key={phone.phone}
              className='phone'
              href={`tel: ${phone.phone}`}
            >
              {
                `${phone.name} - ${phone.phone}`
              }
            </Link>
          )
          )
        }
      </div>
    </div>
    // <Link
    //   className='phone__link'
    //   href={href}
    // >
    //   <div className="wrapper">
    //     <Image src={icon} alt={''} fill />
    //   </div>
    // </Link>
  )
}


