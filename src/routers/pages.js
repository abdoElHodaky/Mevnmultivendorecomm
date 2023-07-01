import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
    res.send('home page');
});

export default router;