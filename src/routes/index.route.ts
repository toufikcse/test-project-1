import express from 'express';
import authorV1 from './v1/author.route';

const router = express.Router();
router.use('/v1', authorV1);

export default router;
