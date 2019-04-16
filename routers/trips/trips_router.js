const router = require('express').Router();

const Trips = require('./trips_model.js');

//GET end points 


//get all trios
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


//get trips by id
router.get('/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const trips = await Trips.getTripById(id)
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving trip experience'
        })
    }
})


//get user's trips
router.get('/user/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const trips = await Trips.getUserTrips(id)
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving user trip experience'
        })
    }
})

//POST endpoints 

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


//Delete endpoints 

router.delete('/:id', async (req, res) => {
    try {
        const trip = await Trips.deleteTrip(req.params.id);
        if (trip) {
            res.status(200).json({message: 'Trip has been deleted'})
        } else {
            res.status(404).json({error: 'Trip cannot be found'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error removing trip'
        })
    }
})

//Update endpoints

router.put('/:id', async (req, res) => {
    const changes = req.body;
    try {
      const tripUpdate = await Trips.editTrip(req.params.id, changes);
      if (tripUpdate) {
        res.status(200).json(tripUpdate);
      } else {
        res.status(404).json({ message: 'The User could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error updating the user',
      });
    }
  });

module.exports = router;