import query from "./init.database.js";

const readAnimaux = async () => {
    const sql = "SELECT * FROM animaux";
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

const readOneAnimaux = async (animauxId) => {
    const sql = "SELECT * FROM habitat WHERE id = ?";
    let error = null
    let result = null
    try {
        result = await query(sql, [animauxId]);
    } catch (e) {
        error = e
    } finally {
        return { error, result }
    }
};

export const AnimauxDB = {
    readAnimaux,
    readOneAnimaux
};