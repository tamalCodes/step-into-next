import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav className={styles.mainnav}>
                <h3 className={styles.brand}>IssueHunter</h3>
                <ul>

                    <Link href='/' passHref>
                        <li>Home</li>
                    </Link>

                    <Link href='/issues' passHref>
                        <li>Issues</li>
                    </Link>

                    <Link href='/about' passHref>
                        <li>About Us</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar