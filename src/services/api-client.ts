import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '0221192ccfd9478d843d3a10e41cb8bc'
    }
})