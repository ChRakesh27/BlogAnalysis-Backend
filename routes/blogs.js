const express = require('express')
const getBlogs = require('../services/fetchBlogs')
const { blogAnalysis, memoizedFilter } = require('../services/analysis');

const router = express.Router();

router.get('/blog-stats', async (req, res, next) => {
    try {
        const blogs = await getBlogs();
        const analysis = blogAnalysis(blogs);

        res.status(200).json(analysis)
    }
    catch (err) {
        next(err)
    }
})

router.get('/blog-search', async (req, res, next) => {
    try {
        const queryStr = req.query.query;

        if (!queryStr?.trim()) {
            res.status(400).send({ message: "missing `query` property in the url" })
            return
        }

        const cacheKey = queryStr

        const blogs = await getBlogs();
        const filteredBlogs = memoizedFilter(cacheKey, blogs, queryStr)

        res.status(200).json(filteredBlogs)
    } catch (err) {
        next(err)
    }

})

module.exports = router
