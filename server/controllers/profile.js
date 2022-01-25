import express from 'express';
import mongoose from 'mongoose';

import Profile from '../models/Profile.js';

const router = express.Router();

//GET ALL PROFILES
export const getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET PROFILE BY ID
export const getProfile = async (req, res) => {
    try {  
        const profile = await Profile.findOne(req.params.id);
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json(err);
    }
}

//CREATE PROFILE
export const createProfile = async (req, res) => {
    const newProfile = new Profile(req.body);
    try {
        const savedProfile = await newProfile.save();
        res.status(200).json(savedProfile);
    }catch (err) {
        res.status(500).json(err);
    }
}


//UPDATE A PROFILE BY ID
export const updateProfile = async (req, res) => {
    try {
        const updatedProfile = await Profile.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedProfile);
    } catch (err) {
        res.status(500).json(err);
    }
}