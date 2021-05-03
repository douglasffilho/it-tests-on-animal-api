import VerifierController from './controller/VerifierController';
import express from 'express';

const router = express.Router();

router.get('/:text', VerifierController.verifyByText);

export default router;
