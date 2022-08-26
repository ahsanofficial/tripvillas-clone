import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"

const Card = ({ data, h, bt }) => {
    return (
        data &&
        <>
            <Box border={'1px solid green'} p={'40px'} textAlign={'center'}>
                <Text mb={'20px'} border={'1px solid green'} fontSize={'1.5rem'}>{h}</Text>
                <Flex border={'1px solid red'} flexWrap={'wrap'}>
                    {
                        data.map((e, i) => (
                            <Box border={'1px solid black'} w={'120px'}>
                                <Image src={e.image} height={'40px'} width={'40px'} alt={e.image} m={'auto'} />
                                <Text color={'#6c757d'}>{e.text}</Text>
                            </Box>
                        ))
                    }
                </Flex>
                {
                    bt && <Button borderRadius={0} px={'30px'} fontSize={'13.125px'} textTransform={'uppercase'} color={'white'} fontWeight={'.875rem'} bgColor={'#1e87f0'} mt={'20px'}>{bt}</Button>
                }
            </Box>
        </>
    )
}
export default Card