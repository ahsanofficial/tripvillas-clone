import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"

const Card = ({ data, h, bt }) => {
    return (
        data &&
        <>
            <Box p={'40px'} textAlign={'center'} boxShadow={'0 5px 15px rgb(0 0 0 / 8%)'}>
                <Text mb={'20px'} color={'#484848'} fontWeight={'.875rem'} fontSize={'1.5rem'}>{h}</Text>
                <Flex flexWrap={'wrap'} justifyContent={'space-between'}>
                    {
                        data.map((e, i) => (
                            <Box w={'115px'} pb={'10px'}>
                                <Image src={e.image} height={'40px'} width={'40px'} alt={e.image} m={'auto'} />
                                <Text color={'#6c757d'} pt={'20px'} fontSize={'15px'} lineHeight={1.5} fontWeight={'.875rem'}>{e.text}</Text>
                            </Box>
                        ))
                    }
                </Flex>
                {
                    bt && <Button borderRadius={0} px={'30px'} fontSize={'13.125px'} textTransform={'uppercase'} color={'white'} fontWeight={'.875rem'} bgColor={'#1e87f0'} _hover={{ background: '#0760b9' }}>search</Button>
                }
            </Box>
        </>
    )
}
export default Card