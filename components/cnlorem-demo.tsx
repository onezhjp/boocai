import { useState, useEffect } from 'react'
import cnlorem from 'cnlorem'

import '@radix-ui/themes/styles.css';
import { Theme, Flex, Text, Button, Slider } from '@radix-ui/themes';


export function Demo() {
    const [text, setText] = useState('')
    const [count, setCount] = useState(200)

    useEffect(() => {
        setText(cnlorem(count));
    }, []);

    function handleClick() {
        setText(cnlorem(count));
    }

    return (
        <>
            <Theme appearance="inherit" accentColor="grass" radius="small">
                <Flex direction="column" gap="2" py="3">
                    <Flex direction="row" align="center">
                        <Button onClick={handleClick}  mr="5">Refresh</Button>
                        <Text mr="2">{count} 字</Text>
                        <Slider 
                            min={20}
                            max={500}
                            step={20}
                            defaultValue={[count]} 
                            style={{flexGrow: 1}} 
                            onValueChange={(vals)=>{setCount(vals[0])}}
                            />
                    </Flex>
                    <Text>{text}</Text>
                </Flex>
            </Theme>
        </>
    );
}
