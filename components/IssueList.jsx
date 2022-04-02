import React, { useContext, useEffect } from 'react'
import Issuecontext from '../context/Issuecontext';

const IssueList = () => {
    const context = useContext(Issuecontext);
    const { anchor } = context;

    useEffect(() => {
        console.log(anchor)
    }, []);

    return (
        <div>IssueList</div>
    )
}

export default IssueList