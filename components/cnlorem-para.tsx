import { useState, useEffect } from 'react'
import cnlorem from "cnlorem"

export const LoremPara = (props) => {
    const [text, setText] = useState('')
    useEffect(() => {
        setText(cnlorem({n: props.n, en: Math.floor(props.n*0.1)}));
    }, []);
    return (
        <>
            <br />
            <p>{text}</p>
        </>
    )
}

