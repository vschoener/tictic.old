// @flow

import { Router } from 'express';

// Import all Controller (Micro service shouldn't have much right ?)

const router: Router = Router();

router.use('/', (req, res) => {
  res.json({ok: 's2'});
})

export default router;
