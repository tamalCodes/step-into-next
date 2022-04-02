import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getsingleissue } from '../../service/IssueAPi';

const Issuedetailed = () => {

    const [issuedetails, setissuedetails] = useState()


    const getdetailsviaslug = async (issueslug) => {
        const issuedetailed = await getsingleissue(issueslug)
        console.log(issuedetailed);
        setissuedetails(issuedetailed.data)
    }

    const router = useRouter();
    useEffect(() => {

        if (!router.isReady) return;

        const { slug } = router.query;
        console.log(slug);
        getdetailsviaslug(slug)

    }, [router.isReady]);

    return (
        <> <div>{issuedetails && issuedetails.title}</div> </>
    )
}

export default Issuedetailed