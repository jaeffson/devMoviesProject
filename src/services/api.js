import axios from "axios";

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params:{
        api_key:'6bed6efd40d7bde2abdd53b0eae689b0',
        language:'pt-BR',
        page:1,
    }
})

export default api