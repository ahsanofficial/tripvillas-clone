import Header from '../Components/Home/Header'
import Footer from '../Components/Home/Footer'
import Main from '../Components/Home/Main'
import { Container } from '@chakra-ui/react'

const Home = () => {
    return (
        <>
            <Container maxW={'100%'} p={0} m={0} boxSizing={'border-box'}>
                <Header />
                <Main />
                <Footer />
            </Container>
        </>
    )
}
export default Home