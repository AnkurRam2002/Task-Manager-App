import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <nav>
        <h1>Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">New</Link>
    </nav>
  )
}

export default Navbar