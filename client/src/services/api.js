import axios from 'axios';

const API_URI = 'http://localhost:8000'

const API_GMAIL = async (serviceUrlObject, payload, type) => {
    // const { params, urlParams, ...body } = requestData;

    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}/${type}`,
        data: payload
    })
}

export default API_GMAIL;