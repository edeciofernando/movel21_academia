import axios from 'axios'

const Conecta = axios.create({baseURL: 'http://177.101.203.139/edecio/academia/'})

export default Conecta