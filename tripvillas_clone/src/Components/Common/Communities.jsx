import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from './Card';

const Communities = () => {
  const [communitiesData, setCommunitiesData] = useState([])
  const [Card1Data, setCard1Data] = useState([])
  const [Card2Data, setCard2Data] = useState([])
  const [Card3Data, setCard3Data] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3001/CommunitiesData").then(res => setCommunitiesData(res.data))
  }, [])

  useEffect(() => {
    axios.get("http://localhost:3001/card1Data").then(res => setCard1Data(res.data))
  }, [])

  useEffect(() => {
    axios.get("http://localhost:3001/card2Data").then(res => setCard2Data(res.data))
  }, [])

  useEffect(() => {
    axios.get("http://localhost:3001/card3Data").then(res => setCard3Data(res.data))
  }, [])

  const style = {
    backgroundSize: 'cover',
    height: '150px',
    width: '100%',
    textShadow: '0 0 20px black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center'
  }

  return (
    communitiesData &&
    <>
      <Box>


        <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} px={'60px'} py={'40px'}>
          <Box p={'40px'} textAlign={'center'} boxShadow={'0 5px 15px rgb(0 0 0 / 8%)'}>
            <Text mb={'20px'} color={'#484848'} fontWeight={'.875rem'} fontSize={'1.5rem'}>Fully Managed Communities By Tripvillas</Text>
            <SimpleGrid columns={[2, 4, 2, 2]} justifyContent={'space-between'}>
              <Card data={Card1Data} />
            </SimpleGrid>
          </Box>

          <SimpleGrid columns={[1, 2, 2, 4]} spacing={10}>
            {
              communitiesData.map((e, i) => (
                <Flex key={i} backgroundImage={`url(${e.image})`} style={style}>
                  <Box p={'30px'} cursor={'pointer'}>
                    <Text fontSize={'15px'} fontWeight={'bolder'}>{e.heading}</Text>
                    <Text fontSize={'13.125px'}>{e.text}</Text>
                  </Box>
                </Flex>
              ))
            }
          </SimpleGrid>
        </SimpleGrid>






        <SimpleGrid columns={[1, 1, 2, 2]} gap={10} px={'60px'} py={'40px'} >
          <Box p={'40px'} textAlign={'center'} boxShadow={'0 5px 15px rgb(0 0 0 / 8%)'}>
            <Text mb={'20px'} color={'#484848'} fontWeight={'.875rem'} fontSize={'1.5rem'}>Holiday Home Investment Opportunities</Text>
            <SimpleGrid columns={[2, 4, 4, 4]} justifyContent={'space-between'}>
              <Card data={Card2Data} bt={'EXPLORE INVESTMENT OPPORTUNITIES'} />
            </SimpleGrid>
          </Box>

          <Box p={'40px'} textAlign={'center'} boxShadow={'0 5px 15px rgb(0 0 0 / 8%)'}>
            <Text mb={'20px'} color={'#484848'} fontWeight={'.875rem'} fontSize={'1.5rem'}>Are You A Holiday Home Owner/Manager?</Text>
            <SimpleGrid columns={[2, 4, 4, 4]} justifyContent={'space-between'}>
              <Card data={Card3Data} bt={'List Your Property'} />
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>


    </>
  );
};
export default Communities;
