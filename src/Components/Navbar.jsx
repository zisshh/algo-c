import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'

export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">AlgoC</span>
      </div>
    </nav>
  )
}
