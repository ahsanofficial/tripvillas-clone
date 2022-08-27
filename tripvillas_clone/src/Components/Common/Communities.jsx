import { Box, Flex, Grid, Text } from "@chakra-ui/react";
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
    width: '160px',
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




        <Flex px={'60px'} py={'40px'} gap={'40px'}>
          <Card data={Card1Data} h={'Fully Managed Communities By Tripvillas'} />
          <Grid templateColumns='repeat(4, 1fr)' gap={'40px'} >
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
          </Grid>
        </Flex>





        <Flex gap={'40px'} px={'60px'} py={'40px'} >
          <Card h={'Holiday Home Investment Opportunities'} data={Card2Data} bt={'Explore Investment Opportunities'} />
          <Card h={'Are You A Holiday Home Owner/Manager?'} data={Card3Data} bt={'List Your Property'} />
        </Flex>

      </Box>


    </>
  );
};
export default Communities;
