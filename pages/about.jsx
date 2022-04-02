import React, { useState, useEffect } from 'react'
import styles from "../styles/Home.module.css"
import Image from "next/image";
import Navbar from './navbar';

const About = () => {

    useEffect(() => {
        console.log("Hello world")
    }, []);

    return (
        <>
            <div className={styles.container}>

                <Navbar />
                <main className={styles.main}>
                    <Image
                        alt="Next.js logo"
                        src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
                        width={1200}
                        height={400}
                    />
                    <h1 className={styles.title}>Here{"'"}s all about us !!</h1>

                    <p className={styles.description}>
                        Issue hunter is a place where the community aims to solve your issue !!
                    </p>
                    <p className={styles.description}>
                        Your issues can be anything be it a simple software fix, some issues related to this site itself, any problems in your code and whatsoever. We aim to have a community where all the issues gets solved, its simple. Just post one in the issues section and the community will handle the rest 😎
                    </p>
                </main>


            </div>
        </>
    )
}

export default About