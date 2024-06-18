import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BloodInventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        // Fetch the blood inventory data when the component mounts
        axios.get('http://localhost:5000/blood-inventory')
            .then(response => setInventory(response.data))
            .catch(error => console.error('Error fetching blood inventory:', error));
    }, []);


    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Blood Inventory</h2>
            <h3 className="mt-4">Current Inventory</h3>
            <ul className="list-group">
                {inventory.map(item => (
                    <li key={item.id} className="list-group-item">
                        {item.blood_type} - {item.quantity} units (Expires on {item.expiry_date})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BloodInventory;
