import { Box, Button, Flex, Heading, Image, Input, InputGroup, Select, Text } from "@chakra-ui/react"

const BooksHotels = () => {
    const style = {
        backgroundImage: `url(Images/booksHotels.jpg)`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '450px',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bgOpacity: 'black',
        zIndex: '-5'
    }

    return (
        <>
            <Flex style={style}>
                <Box color={'white'} fontSize={30} fontWeight={'bold'}>
                    <Text>Book <s>Hotels</s> Vacation Rentals</Text>
                    <Text>Top Holiday Homes - Villas, Apartments & Homestays</Text>
                    <Flex color={'black'} bgColor={'white'}>
                        <Input focusBorderColor='lime' placeholder='Here is a sample placeholder' />
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                        />
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="datetime-local"
                        />
                        <Select placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                        <Button colorScheme='blue' size='lg'>
                            Button
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}
export default BooksHotels