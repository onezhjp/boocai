import { useState, useEffect } from 'react'
import cnlorem from "cnlorem"

export const LoremPara = (props) => {
    const [text, setText] = useState('')
    useEffect(() => {
        setText(cnlorem(props.n));
    }, []);
    return (
        <>
            <br />
            <p>{text}</p>
        </>
    )
}

