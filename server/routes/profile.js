import express from 'express';

import { createProfile, updateProfile, getAllProfiles, getProfile } from '../controllers/profile.js';
const protect = require("../middleware/auth");

const router = express.Router();

router.get('/', getAllProfiles);
router.get('/:id', getProfile);
router.post('/', createProfile);
router.put('/:id',protect, updateProfile);