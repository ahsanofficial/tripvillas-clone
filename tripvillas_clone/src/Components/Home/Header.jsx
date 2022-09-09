import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'

const Header = () => {
    return (
        <>
            <Flex bgColor={'#262626'} color={'white'} p={4}>
                <Image src={'Images/siteLogo.png'} h={'25px'} alt='Images/siteLogo.png' />
                <Spacer />
                <Box mr={4}>
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="user"><circle fill="none" stroke="white" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle><path fill="none" stroke="white" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path></svg>
                </Box>
                <Flex gap={1} mr={6}>
                    <Text>INR</Text>
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="triangle-down"><polygon stroke="white" fill="white" points="5 7 15 7 10 12"></polygon></svg>
                </Flex>
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="navbar-toggle-icon"><rect stroke="white" y="9" width="20" height="1"></rect><rect stroke="white" y="3" width="20" height="1"></rect><rect stroke="white" y="15" width="20" height="1"></rect></svg>
            </Flex>
        </>
    )
}

export default Header
