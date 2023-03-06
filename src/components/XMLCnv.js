import React, { useEffect } from 'react'
import XMLParser from 'react-xml-parser';

const XMLCnv = () => {
    useEffect(() => {
        fetch("./XML/data.xml")
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data); 
                console.log(xml)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div></div>
    )
};

export default XMLCnv