import express from 'express';
import { test } from './gall';

const { Router } = express;
const router = Router();

router.get('/', test);

export default router;
