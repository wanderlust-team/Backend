const db = require('../../data/dbConfig.js');

module.exports = {
    getTrips,
    addTrips,
    getTripById,
    getUserTrips,
    editTrip,
    deleteTrip
}


function getTrips() {
    return db('Trips');
}

function addTrips(trip) {
    return db('Trips')
        .insert(trip)
        .then(ids => {
            return ids[0];
        });
}

function getTripById(id) {
    return db('Trips').where({id}).first();
}

function getUserTrips(id) {
    return db('Trips').where({user_id: id});
}

function deleteTrip(id) {
    return db('Trips').where({id}).del();
}

function editTrip(id, body) {
    return db('Trips').where({id}).update(body)
}

