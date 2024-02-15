
import Highscore from "../models/Highscore.js";
import pokemons from "../pokemon.json" assert { type: "json" };

export const getPokemons = (req, res) => {
    console.log(pokemons);
    res.json(pokemons)
};

export const getPokemon = (req, res) => {
    let { id } = req.params;
    const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(id));
    if (pokemon) {
        res.json(pokemon);
    } else {
        res.status(404).send("There is no such pokemon");
    }
};


export const postHighscore = async (req, res) => {

    try {
        const { name, pokemon, damage, highscore } = req.body;

        const data = await Highscore.create({ name, pokemon, damage, highscore })
        console.log(data)
        res.status(201).json(data)
    } catch (error) {
        res.sendStatus(500)
        console.log(error)
    }
}
