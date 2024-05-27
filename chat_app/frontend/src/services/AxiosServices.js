import axios from 'axios';



export const registerUser = (body) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'localhost:5000/api/auth/register',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(body)
    };

    return axios.request(config)
}

