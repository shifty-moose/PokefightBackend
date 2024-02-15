import express from 'express';
import { getPokemon, getPokemons, postHighscore } from '../controllers/pokemonController.js';

const pokemonRoutes = express.Router();

pokemonRoutes.get('/', getPokemons);
pokemonRoutes.get('/:id', getPokemon);
pokemonRoutes.post('/', postHighscore);


export default pokemonRoutes;