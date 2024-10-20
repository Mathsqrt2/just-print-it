import app from "./app.js";
import config from './config.js';

app.listen(config.api.port, () => {
    console.log(`Server is currently running on port ${config.api.port}. Relaunch time: ${new Date().toLocaleString("pl-PL")}`);
}); 