import initHabitatRoutes from "./habitat.routes.js";
import initAnimalRoutes from "./animal.routes.js";
import intMissionRoutes from "./mission.routes.js";
import initPrestationRoutes from "./prestation.routes.js";




const initRoutes = (app) => {
    initHabitatRoutes(app);
    initAnimalRoutes(app);
    intMissionRoutes(app);
    initPrestationRoutes(app);
    };

    export default initRoutes;