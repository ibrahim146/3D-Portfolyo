import React, { useEffect, useState } from 'react'
import "./menü.css"
function Menü() {
    const [menüopen, setmenüopen] = useState("closed")
    useEffect(() => {
        console.log(menüopen);
    }, [menüopen])
    return (
        <>
            <div className='menü_con'>
                <label className="hamburger"  >
                    <input type="checkbox" onClick={() => setmenüopen(menüopen === "open" ? "closed" : "open")} />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>

            <div className={`menü_container ${menüopen}`} >
                <div className={`menü_item`} >
                    <ul>
                        <li>
                            <a href="#">
                                <button className="btn">
                                    HOME
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="#overview">
                                <button className="btn">
                                    SKİLL
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="#Project">
                                <button className="btn">
                                    PROJECT
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="#Contact">
                                <button className="btn">
                                    CONTACT
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menü