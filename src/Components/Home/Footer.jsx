import { Box, Divider, Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getFooterContinents, getFooterCountries } from "../../utilities/api"

const Footer = () => {
    const [countryData, setCountryData] = useState([])
    const [continentsData, setContinentsData] = useState([])

    useEffect(() => {
        getFooterCountries().then(res => setCountryData(res.data))
        getFooterContinents().then(res => setContinentsData(res.data))
    }, [])

    return (
        <>
            <Box px={'70px'} pt={'80px'} pb={'40px'} >
                <Text pb={'20px'} color={'#484848'} fontSize={'22.5px'}>Holiday Homes Across The Globe</Text>
                <Box>
                    <Flex wrap={'wrap'} gap={'20px'} fontSize={'13.125px'} color={'#6c757d'}>
                        {
                            continentsData?.map((e, i) => (
                                <Box key={i} py={'5px'} px={'10px'}>{e}</Box>
                            ))
                        }</Flex>
                    <Divider />
                    <Flex flexWrap={'wrap'} gap={'10px'} py={'40px'}>
                        {
                            countryData?.map((e, i) => (
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