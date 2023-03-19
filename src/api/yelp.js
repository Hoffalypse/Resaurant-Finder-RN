import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ZPy1hEU3EGDynYPC6_ZqzKc1jUvW1Ps-6l6--btb2URuoa9egqgfs3jB4QoUv5vLwpzbFiHs-f_FLqjS2dLdq1vK1JfgwkRruHFw53vefDlh1aAf1cUy4YfNLHEWZHYx'

    }
})