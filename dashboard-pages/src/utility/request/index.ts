import axios from "axios";


axios.interceptors.request.use(function (config) {
    return config;
});

axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

const request = async (options: any) => {
    return await axios(options)
        .then(response => {
            //  console.log('axios response --->', response);
            return response;
        })
        .catch(error => {
            console.log('axios error --->', error);
            if (error.code == 'ECONNABORTED') {
                return {
                    message: 'Request timeout',
                    error,
                };
            }
            return error;
        });
};

const getRequest = async (url: any) => {
    console.log('get request..', url);
    let response;
    const requestOptions = {
        url: url,
        method: 'get',
        timeout: 1000 * 8
    };
    response = await request(requestOptions);
    return response;
};

const postRequest = async (url: any) => {
    console.log('post request...', url);
    let response;
    const requestOptions = {
        url: url,
        method: 'POST',
        // data: params,
        timeout: 1000 * 8
    };
    console.log(requestOptions);
    response = await request(requestOptions);
    return response;
};



export { getRequest, postRequest };