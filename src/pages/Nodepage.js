import * as React from 'react';
import { useEffect, useState } from 'react';
import NodePageAppBar from '../Components/NodePageAppBar'
import AccordionExpanded from '../Components/AccordionExpanded';



function NodePage() {
    const [AIMEaccordionContent, setAIMEAccordionContent] = useState({title: "", content: ""});
    const [SYSaccordionContent, setSYSaccoridionContent] = useState({title:"", content:""});
    useEffect(() => {
        document.title = "NodePage";

        setAIMEAccordionContent({title: "AIME INFO", content:"Test"})
        setSYSaccoridionContent({title: "SYS info", content: "test"})

        const intervalID = setInterval(() => {
            let date = new Date();
            let dateSpan = document.getElementById("dateSpan")
    
            const options = 
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour12: true,
                    hour: 'numeric',
                    minute: 'numeric',
                    second: "numeric"
                };
    
            const formatter = new Intl.DateTimeFormat('en-US', options);
            const formattedDate = formatter.format(date);
    
            const result = `${formattedDate.replace(/at/, '')}`;
            dateSpan.innerHTML = result;
        })
        return () => clearInterval(intervalID);
    }, [])

    return (

        <div id="NodePage">
            <NodePageAppBar></NodePageAppBar>
            <div id="clock">
                <span id="dateSpan">January 01, 1999 at 00:00:00 AM</span>
            </div>
            <div id="AIMEInfoDiv">
                <AccordionExpanded info={AIMEaccordionContent}></AccordionExpanded>
            </div>
            <div id="SystemInfoDiv">
                <AccordionExpanded info={SYSaccordionContent}></AccordionExpanded>
            </div>
        </div>
    )
}

export default NodePage;