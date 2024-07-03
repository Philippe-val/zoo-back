import express from 'express';
import {AnimauxController} from '../controllers/animaux.controller.js';

const initAnimauxRoutes = (app) => {
    const router = express.Router();
    router.get('/animaux', AnimauxController.readAnimaux);
    router.get('/animaux/:animauxId', AnimauxController.readOneAnimaux);
    app.use('/api', router);
};

export default initAnimauxRoutes;