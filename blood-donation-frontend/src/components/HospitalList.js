import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HospitalList = () => {
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        // Fetch the list of hospitals when the component mounts
        axios.get('http://localhost:5000/hospitals')
            .then(response => setHospitals(response.data))
            .catch(error => console.error('Error fetching hospitals:', error));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Hospitals List</h2>
            <div className="list-group">
                {hospitals.map(hospital => (
                    <div key={hospital.id} className="list-group-item">
                        <h5>{hospital.name}</h5>
                        <p>{hospital.address}</p>
                        <p>Contact: {hospital.contact_info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HospitalList;
