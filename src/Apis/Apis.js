import axios from 'axios'
export const getPostList = async (queryString) => {

    const request = await axios.get(`http://js-post-api.herokuapp.com/api/posts?${queryString}`)

    return request.data

}