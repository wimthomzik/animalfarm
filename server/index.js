import express from 'express';
import cors from 'cors';
//  Init the express app
const app = express();
app.use(cors());
//  Parse any json is send to server
app.use(express.json());

//  Create fake data with Chance
import Chance from 'chance';
const chance = new Chance();

//  Create animals array with 250 entrie of random id, type, age, and name
const animals = [...Array(250).keys()].map(id => {
    return {
        id,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
    };
});

// Create http endpoint for get method that filters animals for those who include the query
app.get('/', (req, res) => {

    const q = req.query.q?.toLowerCase() || '';
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q));

    res.send(results);
});

//  Create Port Listener on 8080 with console log on which URl to go
app.listen(8080, () => console.log('Now listening on http://localhost:8080'));