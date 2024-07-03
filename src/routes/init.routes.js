import initHabitatRoutes from "./habitat.routes.js";
import initAnimalRoutes from "./animal.routes.js";
import intMissionsRoutes from "../databases/missions.database.js";
import initPrestationRoutes from "./prestation.routes.js";




const initRoutes = (app) => {
    initHabitatRoutes(app);
    initAnimalRoutes(app);
    intMissionsRoutes(app);
    initPrestationRoutes(app);
    };

    export default initRoutes;