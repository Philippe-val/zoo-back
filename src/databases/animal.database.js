import query from "./init.database.js";

const readAnimalByHabitat = async (habitatId) => {
    const sql = "SELECT * FROM animaux WHERE id_habitat = ?";
    let error = null
    let result = null
    try {
        result = await query(sql,[habitatId]);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
    }
    
};

const readOneAnimal = async (animalId) => {
    const sql = "SELECT * FROM animaux WHERE id_animal = ?";
    let error = null
    let result = null
    try {
        result = await query(sql, [animalId]);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
    }
};

export const AnimalDB = {
    readAnimalByHabitat,
    readOneAnimal
};