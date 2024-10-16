import app from "./app.js";
const port = 2137;

app.listen(port, () => {
    console.log(`Server is currently running on port ${port}. Relaunch time: ${new Date().toLocaleString("pl-PL")}`);
}); 