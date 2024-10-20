import * as env from 'dotenv'
env.config();

export default {
    api: {
        port: process.env.API_PORT,
    }
}