const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const textRoutes = require('./routes/textData');
const fileRoutes = require('./routes/fileData');
const states = require('./routes/statemanage');

const SupperConnectNode = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(bodyParser.json());

    app.use('/api', textRoutes);
    app.use('/api', fileRoutes);

    app.get('/', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.json({ message: 'Server Working' });
    });

    return app;
};


module.exports = SupperConnectNode;
