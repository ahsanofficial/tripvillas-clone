import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const BooksHotels = () => {
    const style = {
        backgroundImage: `url(Images/booksHotels.jpg)`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '140px'
    }

    const [flag, setFlag] = useState(false)

    // useEffect(() => {
    //     first


    // }, [])


    return (
        <>
            <Flex style={style}>
                <Box w={'60%'} m={'auto'} color={'white'} fontSize={30} fontWeight={'bold'}>
                    <Box>
                        <Text>Book <Text as='del'>Hotels</Text> Vacation Rentals</Text>
                        <Text>Top Holiday Homes - Villas, Apartments & Homestays</Text>
                    </Box>
                    <SimpleGrid columns={[1, 1, 1, 5]} color={'#666'} bgColor={'white'} p={'10px'}>
                        <Flex alignItems={'center'} border={'1px solid #e2d7d7'} pl={'10px'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="search"><circle fill="none" stroke="#a39d9d" stroke-width="1.1" cx="9" cy="9" r="7"></circle><path fill="none" stroke="#a39d9d" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path></svg>
                            <Input variant={'none'} value={''} placeholder='Location' />
                        </Flex>
                        <Flex alignItems={'center'} border={'1px solid #e2d7d7'} pl={'10px'}>
                            <svg stroke="#e2d7d7" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="sign-in" ><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"></polygon><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"></polygon></svg>
                            <Input
                                placeholder="Check In"
                                size="sm"
                                w={'100px'}
                                variant={'none'}
                                value={''}
                            // type="datetime-local"
                            />
                        </Flex>
                        <Flex alignItems={'center'} border={'1px solid #e2d7d7'} pl={'10px'}>
                            <svg stroke="#e2d7d7" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="sign-out"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"></polygon><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"></polygon></svg>
                            <Input
                                placeholder="Check Out"
                                size="sm"
                                w={'100px'}
                                variant={'none'}
                                value={''}
                            // type="datetime-local"
                            />
                        </Flex>
                        <Flex alignItems={'center'} border={'1px solid #e2d7d7'}>
                            <Input
                                placeholder="Select Guests"
                                size="sm"
                                w={'122px'}
                                variant={'none'}
                                p={'22px'} pl={'12px'}
                                value={''}
                            // type="datetime-local"
                            />
                            <Box pr={'5px'} color={"#9b9292"}>
                                <Box textAlign={'center'}>
                                    <Text fontSize={'10px'}>&#9652;</Text>
                                </Box>
                                <Box textAlign={'center'}>
                                    <Text fontSize={'9px'}>&#9660;</Text>
                                </Box>
                            </Box>
                        </Flex>
                        <Button onClick={() => setFlag(true)} borderRadius={0} px={'35px'} py={'23px'} fontSize={'13.125px'} textTransform={'uppercase'} color={'white'} fontWeight={'.875rem'} bgColor={'#1e87f0'} _hover={{ background: '#0760b9' }}>search</Button>
                    </SimpleGrid>
                </Box>
            </Flex >
        </>
    )
}
export default BooksHotels