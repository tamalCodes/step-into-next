import React from 'react'
import styles from "../styles/IssueListPage.module.css"
import Image from 'next/image';
import profilepic from "../public/assets/profilepic.svg"

const SingleIssue = ({ issue }) => {
    return (
        <div className={styles.singleissueparent}>
            <Image src={profilepic} width={85} height={85} />
            <div className={styles.textdiv}>
                <p className={styles.issueheading}> {issue.title} </p>
                <p className={styles.issuedescription}>The page keeps reloading whenever i try to enter a new set of data can you suggest what tag to use so that the pa . . </p>
            </div>
        </div>
    )
}

export default SingleIssue