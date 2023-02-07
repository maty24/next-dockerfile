import Link from 'next/link'
import React from 'react'

export const ActiveLink = ({text,href}) => {
  return (
    <Link href={href}>
        {text}
    </Link>
  )
}
