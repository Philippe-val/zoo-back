import express from 'express';
import initRoutes from '../src/routes/init.routes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;
initRoutes(app);
app.use(cors({ origin: "*" }));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app; 