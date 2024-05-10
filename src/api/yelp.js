import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'BearerD9Wp-pYZ28RFGoeGz8vLdw-kUQA6gF7Mke6WNJAXL1YCe4K1yCdB31hkKVjClktwFUyj9N-g1ECuIY0jHYMF-rRf_rJYtl6jMjePpJ9iJOJougVUUUOxlXtSIQojZnYx' 
    }
});