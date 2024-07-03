import { AnimalDB } from '../databases/animal.database.js';

const readAnimal = async (req, res) => {
    try {
        const Animals = await AnimalDB.readAnimals();
        res.status(200).json({Animals:animals.result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const readOneAnimal = async (req, res) => {
    const AnimalId = req.params.animalId;
    try {
        const Animal = await AnimalDB.readOneAnimal(animalId);
        res.status(200).json({animal:result[0]});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const AnimalController = {
    readAnimal,
    readOneAnimal
};
