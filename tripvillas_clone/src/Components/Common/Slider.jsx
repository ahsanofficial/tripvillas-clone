import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react"
import React from 'react'

export default function Slider({ data, h, handleIncrement, handleDecrement, start, end }) {
    const style = {
        backgroundSize: 'cover',
        height: '150px',
        width: '100%',
        textShadow: '0 0 20px black',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        cursor: 'pointer'
    }

    return (
        data &&
        <>
            <Box>
                <Text pl={'70px'} pt={10} fontSize={'22.5px'} fontWeight={'.875rem'} color={'#484848'}>{h}</Text>
                <SimpleGrid gridTemplateColumns={'1fr 80fr 1fr'} gap={'20px'} p={5} alignItems={'center'}>
                    <Box>
                        <svg cursor={'pointer'} onClick={handleDecrement} height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" data-svg="slidenav-previous"><polyline fill="none" stroke="#989898" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "></polyline></svg>
                    </Box>
                    <SimpleGrid gridTemplateRows={'1fr'} gridTemplateColumns={'repeat(5,1fr)'} gap={10}>
                        {
                            data.map((e, i) => (
                                start <= i && i < end &&
                                <Flex key={i} backgroundImage={`url(${e.image})`} style={style}>
                                    <Box>
                                        <Text fontSize={'22.5px'}>{e.heading}</Text>
                                        <Text fontSize={'13.125px'}>{e.text}</Text>
                                    </Box>
                                </Flex>
                            ))
                        }
                    </SimpleGrid>
                    <Box>
                        <svg cursor={'pointer'} onClick={handleIncrement} height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" data-svg="slidenav-next"><polyline fill="none" stroke="#989898" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "></polyline></svg>
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    )
}
