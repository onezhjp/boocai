import { useState, useEffect } from 'react'
import cnlorem from 'cnlorem'

import '@radix-ui/themes/styles.css';
import { Theme, Flex, Text, Button, Slider } from '@radix-ui/themes';


export function Demo() {
    const [text, setText] = useState('')
    const [count, setCount] = useState(200)
    const [enCount, setEnCount] = useState(5)

    useEffect(() => {
        setText(cnlorem({n: count, en: enCount}));
    }, []);

    function handleClick() {
        setText(cnlorem({n: count, en: enCount}));
    }

    return (
        <>
            <Theme appearance="inherit" accentColor="grass" radius="small">
                <Flex direction="column" gap="2" py="3">
                    <Flex direction="row" align="center">
                        <Button onClick={handleClick}  mr="5">Refresh</Button>
                        <Text mr="2">{count} 字</Text>
                        <Slider 
                            min={10}
                            max={500}
                            step={10}
                            defaultValue={[count]} 
                            style={{flexGrow: 2}} 
                            onValueChange={(vals)=>{setCount(vals[0])}}
                            mr="5"
                            />
                        <Text mr="2">{enCount} 单词</Text>
                        <Slider 
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={[enCount]} 
                            style={{flexGrow: 1}} 
                            onValueChange={(vals)=>{setEnCount(vals[0])}}
                            />
                    </Flex>
                    <Text>{text}</Text>
                </Flex>
            </Theme>
        </>
    );
}
