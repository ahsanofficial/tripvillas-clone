import axios from "axios";

const api = process.env.REACT_APP_API

export function getFooterCountries() {
    return axios.get(`${api}/FooterCountries`)
}

export function getFooterContinents() {
    return axios.get(`${api}/FooterContinents`)
}

export function getCommunitiesData() {
    return axios.get(`${api}/CommunitiesData`)
}

export function getCard1Data() {
    return axios.get(`${api}/card1Data`)
}

export function getCard2Data() {
    return axios.get(`${api}/card2Data`)
}

export function getCard3Data() {
    return axios.get(`${api}/card3Data`)
}

export function getTopDestinationsData() {
    return axios.get(`${api}/TopDestinationsData`)
}

export function getVacationIdeasData() {
    return axios.get(`${api}/VacationIdeasData`)
}