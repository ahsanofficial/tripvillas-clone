import { useEffect, useState } from "react"
import { getTopDestinationsData } from '../../utilities/api'
import Slider from "./Slider"

const TopDestinations = () => {
    const [data, setData] = useState([])
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(5)

    useEffect(() => {
        getTopDestinationsData().then(res => setData(res.data))
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
            <Slider data={data} h={'Top Destinations'} handleIncrement={handleIncrement} handleDecrement={handleDecrement} start={start} end={end} />
        </>
    )
}
export default TopDestinations