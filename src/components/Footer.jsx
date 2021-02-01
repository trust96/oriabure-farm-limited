import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
export default function Footer() {
    return (
        <footer>
 <div className="logo footer__logo">
        <Link href="/">
          <a className="logo__link">
            <img className="responsive--image" src="/Assets/logo.jpeg" alt="" />
          </a>
        </Link>
      </div>
        </footer>
    )
}
