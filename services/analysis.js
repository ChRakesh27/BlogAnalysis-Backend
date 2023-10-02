// load required lodash methods
const { uniqBy, maxBy, filter, includes, lowerCase } = require('lodash');
const { memoizeWithExpirationCustom } = require('../services/cache');

function blogAnalysis(blogs) {
    const len = blogs.length;

    const title = 'privacy'
    const cacheKey = title
    const privacyCount = memoizedFilter(cacheKey, blogs, title).length;

    const unqBlogs = uniqBy(blogs, 'title');

    const longTitle = maxBy(unqBlogs, (blog) => blog.title.length).title;

    return { len, longTitle, privacyCount, unqBlogs };
}

function filterByTitle(blogs, queryStr) {
    return filter(blogs, (blog) => includes(lowerCase(blog.title), lowerCase(queryStr)));
}

// memoizing filters
const memoizedFilter = memoizeWithExpirationCustom(filterByTitle);

module.exports = { blogAnalysis, filterByTitle, memoizedFilter }