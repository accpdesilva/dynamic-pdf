import React, { useEffect } from 'react'
import XMLParser from 'react-xml-parser';

const XMLCnv = () => {
    useEffect(() => {
        fetch("https://russellinvestments.com/webapi/ChiliPublishFeed/GetChiliData?itemId=746B61D4-FFE8-4E90-9C71-67A68FE04A19")
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