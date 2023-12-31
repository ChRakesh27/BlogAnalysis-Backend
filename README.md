# Blog Analysis - Backend

## Getting started

#### Install required tools

- [Node.js](https://nodejs.org) (v18.x.x)

Core package used in the project

- [express](https://www.npmjs.com/package/express)
- [lodash](https://www.npmjs.com/package/lodash)
- [axios](https://www.npmjs.com/package/axios)
- [dotenv](https://www.npmjs.com/package/dotenv)

#### Clone the repo

```bash
git clone https://github.com/ChRakesh27/BlogAnalysis-Backend.git
cd BlogAnalysis-Backend
```

### Create `.env`

- using [dotenv](https://www.npmjs.com/package/dotenv) package to get environment variables.
- create new `.env` file from given `.env-sample` and populate `HASURA_ADMIN_SECRET` variable to run the project

### Install dependencies

```bash
npm install
```

#### Run local server

Run start will start the server with node in development mode. server start on `http://localhost:3000`

```bash
npm run start
```

#### Run local server to run with nodemon

Run start will start the server with nodemon in development mode. server start on `http://localhost:3000`

```bash
npm run start:dev
```

#### Lint check

to check code lint. it uses eslint standard recommended rules

```bash
npm run lint
```

### Import postman collection to test the APIs

- [blog-analysis-postman-collection](./postman_collection/Blog-Analysis.postman_collection.json)

### Benchmark API test result from Postman

- benchmark test runs both API

![benchmark_test_results](./postman_collection/benchmark_test_results.png)
