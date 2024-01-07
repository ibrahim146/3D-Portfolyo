import React, { useEffect, useState } from 'react'
import "./clip_path.css"
const Clip_path = (props) => {
    const { value } = props;
    const [nevvalue, setnevvalue] = useState(0)
    useEffect(() => {
        if (value >= 1410) {
            setnevvalue(value - 1410)
        } else {
            setnevvalue(10)
        }
    }, [value]);
    return (
        <>
            <h2 style={{ right: `${100 - nevvalue / 6}%` }} className="text2">frontend devoloper</h2>
            <h2 style={{ left: `${100 - nevvalue / 6}%` }} className="text">ibrahim akyel</h2>
            <section style={{ clipPath: `circle(${nevvalue}px at 48% 71%)` }}>
                <h2 style={{ right: `${100 - nevvalue / 6}%` }} className="innerText2">frontend devoloper</h2>
                <h2 style={{ left: `${100 - nevvalue / 6}%` }} className="innerText">ibrahim akyel</h2>
            </section>
        </>
    )
}

export default Clip_path