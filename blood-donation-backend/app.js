const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Define routes
app.get('/donors', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM donors');
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/donors', async (req, res) => {
    const { name, blood_type, age, contact_info, registration_date } = req.body;
    const query = `
        INSERT INTO donors (name, blood_type, age, contact_info, registration_date)
        VALUES (?, ?, ?, ?, ?);
        SELECT * FROM donors WHERE id = SCOPE_IDENTITY();
    `;
    const params = [name, blood_type, age, contact_info, registration_date];

    try {
        const result = await db.query(query, params);
        res.status(201).json(result[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Similar endpoints for donations, hospitals, requests, staff, blood inventory, and transactions
// Donations endpoint
app.get('/donations', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM donations');
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/donations', async (req, res) => {
    const { donor_id, donation_date, quantity, blood_type } = req.body;
    const query = `
        INSERT INTO donations (donor_id, donation_date, quantity, blood_type)
        VALUES (?, ?, ?, ?);
        SELECT * FROM donations WHERE id = SCOPE_IDENTITY();
    `;
    const params = [donor_id, donation_date, quantity, blood_type];

    try {
        const result = await db.query(query, params);
        res.status(201).json(result[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Hospitals endpoint
app.get('/hospitals', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM hospitals');
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/hospitals', async (req, res) => {
    const { name, address, contact_info } = req.body;
    const query = `
        INSERT INTO hospitals (name, address, contact_info)
        VALUES (?, ?, ?);
        SELECT * FROM hospitals WHERE id = SCOPE_IDENTITY();
    `;
    const params = [name, address, contact_info];

    try {
        const result = await db.query(query, params);
        res.status(201).json(result[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Requests endpoint
app.get('/requests', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM requests');
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/requests', async (req, res) => {
    const { hospital_id, blood_type, request_date, quantity, status } = req.body;
    const query = `
        INSERT INTO requests (hospital_id, blood_type, request_date, quantity, status)
        VALUES (?, ?, ?, ?, ?);
        SELECT * FROM requests WHERE id = SCOPE_IDENTITY();
    `;
    const params = [hospital_id, blood_type, request_date, quantity, status];

    try {
        const result = await db.query(query, params);
        res.status(201).json(result[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/blood-inventory', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM blood_inventory');
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/blood-inventory', async (req, res) => {
    const { blood_type, quantity, expiry_date } = req.body;
    const query = `
        INSERT INTO blood_inventory (blood_type, quantity, expiry_date)
        VALUES (?, ?, ?);
        SELECT * FROM blood_inventory WHERE id = SCOPE_IDENTITY();
    `;
    const params = [blood_type, quantity, expiry_date];

    try {
        const result = await db.query(query, params);
        res.status(201).json(result[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/staff', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM staff');
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/staff', async (req, res) => {
    const { name, position, contact_info, hospital_id } = req.body;
    const query = `
        INSERT INTO staff (name, position, contact_info, hospital_id)
        VALUES (?, ?, ?, ?);
        SELECT * FROM staff WHERE id = SCOPE_IDENTITY();
    `;
    const params = [name, position, contact_info, hospital_id];

    try {
        const result = await db.query(query, params);
        res.status(201).json(result[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
