import { Router } from "express";
import { conversionRoutes } from "./conversionCurrency.routes";

const router = Router();

router.use('/conversion', conversionRoutes);

export { router }
