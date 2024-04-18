import Event from "../models/eventModel.js";
import expressAsyncHandler from "express-async-handler";

const createEvent = expressAsyncHandler(async(req, res) => {
    const creator = req.user;
    const {name, description, location, additionalInfo, photoURL, startDate, endDate, stats} = req.body;
    try {
        const event = await Event.create({
            name,
            creator,
            description,
            location,
            additionalInfo,
            photoURL,
            startDate,
            endDate,
            stats
        }).then((event) => {
            res.status(200).json(event)
        })
    } catch(error) {
        res.status(400).send(error.message);
    }
});

const getEventByID = expressAsyncHandler(async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        //checking if event exist
        if (!event) {
            res.status(404);
            throw new Error("Not Found");
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


export { createEvent, getEventByID };