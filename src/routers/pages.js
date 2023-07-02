import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
    res.render('index', {
        title: 'welcome',
        layout: 'main'
    });
});

router.get('/about', (_, res) => {
    res.render('about', {
        title: 'about',
        layout: 'main'
    });
});

export default router;