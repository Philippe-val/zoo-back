import { AnimauxDB } from '../databases/animaux.database.js';

const readAnimaux = async (req, res) => {
    try {
        const Animals = await AnimauxDB.readAnimaux();
        res.status(200).json({Animaux:animaux.result});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const readOneAnimaux = async (req, res) => {
    const AnimauxId = req.params.animauxId;
    try {
        const Animaux = await AnimauxDB.ux(animauxId);
        res.status(200).json({animaux:result[0]});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const AnimauxController = {
    readAnimaux,
    readOneAnimaux
};
