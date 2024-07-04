import query from "./init.database.js";

const readAnimal = async () => {
    const sql = "SELECT * FROM animal";
    let error = null
    let result = null
    try {
        result = await query(sql);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
    }
    
};

const readOneAnimal = async (animalId) => {
    const sql = "SELECT * FROM habitat WHERE id = ?";
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
    readAnimal,
    readOneAnimal
};