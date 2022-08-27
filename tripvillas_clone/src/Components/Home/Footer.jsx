import { Box, Divider, Flex, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

const Footer = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3001/FooterData").then(res => setData(res.data))
    }, [])

    let arr = ['ASIA', 'EUROPE', 'NORTH AMERICA', 'SOUTH AMERICA', 'AFRICA', 'OCEANIA']
    let divs = []
    for (let i = 0; i < arr.length; i++) {
        divs.push(<Box py={'5px'} px={'10px'}>{arr[i]}</Box>)
    }
    return (
        <>
            <Box px={'70px'} pt={'80px'} pb={'40px'} >
                <Text pb={'20px'} color={'#484848'} fontSize={'22.5px'}>Holiday Homes Across The Globe</Text>
                <Box>
                    <Flex gap={'20px'} fontSize={'13.125px'} color={'#6c757d'}>{divs}</Flex>
                    <Divider />
                    <Flex flexWrap={'wrap'} gap={'10px'} py={'40px'}>
                        {
                            data.map((e, i) => (
                                <Box key={i} width={'180px'}>
                                    <Text fontSize={'15px'} color={'#484848'}>{e.heading}</Text>
                                    <Text fontSize={'13.125'} color={'#6c757d'}>{e.text}</Text>
                                </Box>
                            ))
                        }
                    </Flex>
                </Box>


            </Box>
        </>
    )
}
export default Footer