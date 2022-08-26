import { Box, Flex, Text } from "@chakra-ui/react"
import React from 'react'

export default function Slider({ data, h, handleIncrement, handleDecrement, start, end }) {
    const style = {
        backgroundSize: 'cover',
        height: '150px',
        width: '200px',
        textShadow: '0 0 20px black',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
    }

    return (
        data &&
        <>
            <Box>
                <Text pl={'70px'} pt={10} fontSize={'22.5px'} fontWeight={'.875rem'} color={'#484848'}>{h}</Text>
                <Flex p={5} alignItems={'center'} justifyContent={'space-between'}>
                    <svg cursor={'pointer'} onClick={handleDecrement} width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" data-svg="slidenav-previous"><polyline fill="none" stroke="#989898" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg>
                    {
                        data.map((e, i) => (
                            start <= i && i < end && <Flex key={i} backgroundImage={`url(${e.image})`} style={style}>
                                <Box>
                                    <Text fontSize={'22.5px'}>{e.heading}</Text>
                                    <Text fontSize={'13.125px'}>{e.text}</Text>
                                </Box>
                            </Flex>
                        ))
                    }
                    <svg cursor={'pointer'} onClick={handleIncrement} width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" data-svg="slidenav-next"><polyline fill="none" stroke="#989898" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg>
                </Flex>
            </Box>
        </>
    )
}
