import http, { Server} from 'node:http'
import { dotEnv } from './utils/env-variables/env-loader.js';
import { processRequests } from './process-request.js';

dotEnv()
const PORT = process.env.PORT;
const server:Server = http.createServer(processRequests)
server.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})
