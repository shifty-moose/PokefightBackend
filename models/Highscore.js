import mongoose from "mongoose";

const HighscoreSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    pokemon: {
        required: true,
        type: String
    },
    damage: {
        required: true,
        type: Number
    },
    highscore: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: Date
    },
    id: {
        required: true,
        type: Number
    }
});

const Highscore = mongoose.model("Highscore", HighscoreSchema)

export default Highscore;

