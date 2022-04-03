import React from 'react'
import styles from "../styles/Home.module.css"
import Image from "next/image"
import issue1 from "../public/assets/issue1.svg"
import issue2 from "../public/assets/issue2.svg"
import Link from "next/link"

const Homecontainer = () => {
    return (
        <>
            <div className={styles.superparent}>
                <main className={styles.main}>
                    <div className={styles.welcometextdiv}>

                        <h1 className={styles.title}>Welcome to Issue Hunter !!</h1>

                        <p className={styles.description}>
                            A place where the comunnity solves your issue !!
                        </p>

                    </div>

                    <div className={styles.Imageflex1}>
                        <div className={styles.Imageflex1_imagediv}>
                            <Image src={issue1} width={400} height={400} />
                        </div>

                        <div className={styles.Imageflex1_textdiv}>
                            <p>
                                Facing problem with some stuffs and finding hard to find out the solution ? <br />
                                Here's the right place to find one !! <br />
                                Go the <Link href={"/issues"} passHref>
                                    <span> issues </span>
                                </Link> , and tell the community about your issue, we will help you !! Just so you know  , we the core members are not responsible for your decision, we instead have an Open commmunity which aims to solve your issue.
                            </p>

                            <button type="button" className={`btn btn-primary ${styles.gethelpbutton}`}>
                                Get help
                            </button>

                        </div>

                    </div>


                    <div className={styles.Imageflex2}>


                        <div className={styles.Imageflex1_textdiv}>
                            <p>
                                Facing problem with some stuffs and finding hard to find out the solution ? <br />
                                Here's the right place to find one !! <br />
                                Go the <span>issues</span> , and tell the community about your issue, we will help you !! Just so you know  , we the core members are not responsible for your decision, we instead have an Open commmunity which aims to solve your issue.
                            </p>

                            <button type="button" className={`btn btn-primary ${styles.gethelpbutton}`}>
                                Get help
                            </button>

                        </div>


                        <div className={styles.Imageflex1_imagediv}>
                            <Image src={issue2} width={400} height={400} />
                        </div>



                    </div>


                </main>
            </div>



        </>
    )
}

export default Homecontainer