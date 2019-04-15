const db = require('../../data/dbConfig.js');

module.exports = {
    getUserTrips,
    addTrips
}


function getUserTrips() {
    return db('Trips').select('user_id');
}

function addTrips(action) {
    return db('Trips')
        .insert(action)
        .then(ids => {
            return ids[0];
        });
}