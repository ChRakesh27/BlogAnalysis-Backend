const { memoize } = require('lodash');
const cache = new Map();

const DefaultExpirationTimeMs = process.env.CacheExpirationTimeMs || 10000

const memoizeForBlogsWithExpiration = (func, key) => {
    const memorizer = memoize(func, () => key)

    setInterval(() => {
        memorizer.cache.clear();
        cache.clear()
        console.log(`--- cache cleared after ${DefaultExpirationTimeMs} milliseconds  ---`)
    }, DefaultExpirationTimeMs);

    return memorizer
}

function memoizeWithExpirationCustom(func, expirationTimeMs = DefaultExpirationTimeMs) {
    const memoizedFunc = ((cacheKey, ...arg) => {

        if (cache.has(cacheKey)) {
            const { value, expiration } = cache.get(cacheKey);

            if (Date.now() < expiration) {
                return value;
            }
        }

        const result = func(...arg);
        // const result = memoize(func)
        const expiration = Date.now() + expirationTimeMs;
        cache.set(cacheKey, { value: result, expiration });

        return result;
    });

    return memoizedFunc;
}



module.exports = {
    memoizeForBlogsWithExpiration,
    memoizeWithExpirationCustom
}