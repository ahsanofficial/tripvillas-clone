import { Box, Link } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { getVacationIdeasData } from '../../utilities/api'
import Slider from "./Slider"

const TopDestinations = () => {
    const [data, setData] = useState([])
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(5)

    useEffect(() => {
        getVacationIdeasData().then(res => setData(res.data)).catch(err => console.log('err', err))
    }, [])

    function handleIncrement() {
        if (end === data.length) return
        setStart(start + 1)
        setEnd(end + 1)
    }
    function handleDecrement() {
        if (start === 0) return
        setStart(start - 1)
        setEnd(end - 1)
    }

    return (
        <>
            <Box>
                <Slider h={'Vacation Ideas'} data={data} handleIncrement={handleIncrement} handleDecrement={handleDecrement} start={start} end={end} />
                <Link color={'#39f'} pl={'70px'} fontSize={'13.125px'}>SHOW ALL IDEAS</Link>
            </Box>
        </>
    )
}
export default TopDestinations