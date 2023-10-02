const axios = require('axios');
const { memoizeForBlogsWithExpiration } = require('./cache');

const memoizeGetBlogs = memoizeForBlogsWithExpiration(async (url, options) => {
    const result = await axios.get(url, options)
    return result.data
}, "getBlogs");

async function getBlogs() {
    const options = {
        headers: {
            'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
        }
    };
    const url = 'https://intent-kit-16.hasura.app/api/rest/blogs'

    const data = await memoizeGetBlogs(url, options)

    return data.blogs
}

module.exports = getBlogs