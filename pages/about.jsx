import React from 'react'
import styles from "../styles/Home.module.css"
import Image from "next/image";

const About = () => {
    return (
        <>
            <div className={styles.container}>


                <main className={styles.main}>
                    <Image
                        alt="Next.js logo"
                        src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
                        width={1200}
                        height={400}
                    />
                    <h1 className={styles.title}>Here{"'"}s all about us !!</h1>

                    <p className={styles.description}>
                        A place where the comunnity solves your issue !!
                    </p>
                </main>

                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{" "}
                        <span className={styles.logo}>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                    </a>
                </footer>
            </div>
        </>
    )
}

export default About