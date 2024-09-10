import { Router } from 'express';
import { e } from './utils/trycatch';
import { ExecuteDecistionTree } from './controlers';

const router = Router();

router.post('/execute-decision-tree', e(ExecuteDecistionTree));

export default router;
