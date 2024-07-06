import { AnimalDB } from '../databases/animal.database.js';

const readAnimal = async (req, res) => {
    const habitatId = req.params.habitatId;
    try {
        const animaux = await AnimalDB.readAnimalByHabitat(habitatId);
        res.status(200).json({animaux:animaux});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const readOneAnimal = async (req, res) => {
    const animalId = req.params.animalId;
    try {
        const animal = await AnimalDB.readOneAnimal(animalId);
        res.status(200).json({animal:animal.result[0]});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const AnimalController = {
    readAnimal,
    readOneAnimal
};
