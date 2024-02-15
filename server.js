import 'dotenv/config'
import express from 'express';
import pokemonRoutes from './routes/pokeRoute.js';
import { connectDB } from "./db/client.js"
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());


app.use(express.json());
app.use('/', pokemonRoutes);

const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Port listens on port ${port}`)
    })
}


startServer().catch(error => {
    console.log(error, "Failed to start the server")
})