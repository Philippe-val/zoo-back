import express from 'express';
import {MissionController} from '../controllers/mission.controller.js';

const initMissionRoutes = (app) => {
    const router = express.Router();
    router.get('/mission', AnimalController.readAnimal);
    router.get('/mission/:missionlId', MissionController.readOneMission);
    app.use('/api', router);
};

export default initMissionRoutes;