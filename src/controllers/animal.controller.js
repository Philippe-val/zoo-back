import { AnimalDB } from '../databases/animal.database.js';

const readAnimal = async (req, res) => {
    try {
        const animal = await AnimalDB.readAnimal();
        res.status(200).json({animal:animal.result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const readOneAnimal = async (req, res) => {
    const animalId = req.params.animalId;
    try {
        const Animal = await AnimalDB.ux(animalId);
        res.status(200).json({animal:result[0]});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const AnimalController = {
    readAnimal,
    readOneAnimal
};
