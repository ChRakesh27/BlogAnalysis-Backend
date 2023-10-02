require('dotenv').config()

if (!process.env.HASURA_ADMIN_SECRET) {
    console.error("missing environment variable HASURA_ADMIN_SECRET")
    process.exit(1)
}

const app = require('./app')

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

// Shutting down gracefully
function gracefulShutdown() {
    console.log('Shutting down gracefully...');
    server.close((err) => {
        if (err) {
            console.error('Error while closing server:', err);
            process.exit(1);
        } else {
            console.log('Server closed.');
            process.exit(0);
        }
    });
}