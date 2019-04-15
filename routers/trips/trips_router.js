const router = require('express').Router();

const Trips = require('./trips_model.js');



router.get('/', async (req, res) => {
    try {
        const trips = await Trips.getTrips(req)
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving trips experience'
        })
    }
})


router.post('/', async (req, res) => {
    try {
        const addTrip = await Trips.addTrips(req.body)
        res.status(201).json(addTrip);
    } catch (error) {
        res.status(500).json({
            Error: 'Error adding trip'
        })
    }
})

module.exports = router;