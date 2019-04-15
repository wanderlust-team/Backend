const db = require('../../data/dbConfig.js');

module.exports = {
    getTrips,
    addTrips
}


function getTrips() {
    return db('Trips')
}

function addTrips(action) {
    return db('Trips')
        .insert(action)
        .then(ids => {
            return ids[0];
        });
}