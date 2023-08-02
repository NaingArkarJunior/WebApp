const BASE_URL = "http://localhost:8080"


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,  
});

const getSwifties = (cb) =>{
    instance.get("/swifty")
                .then(data=>cb(data.data))
                .catch(error=>alert(error))
}

const getSwifty = async () =>{
    let data = await instance.get("swifty")
    return data
}