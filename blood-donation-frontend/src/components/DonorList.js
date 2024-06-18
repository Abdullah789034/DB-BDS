import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DonorForm from './DonorForm';

const DonorList = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/donors')
            .then(response => setDonors(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-danger">Donors List</h1>
            <div className="card shadow-lg">
                <div className="card-header bg-danger text-white">
                    <h2 className="card-title mb-0">Registered Donors</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {donors.map(donor => (
                            <li key={donor.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-1">{donor.name}</h5>
                                    <p className="mb-1">{donor.blood_type} | {donor.contact_info}</p>
                                </div>
                                <span className="badge badge-danger badge-pill">{donor.blood_type}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-end p-3">
                <button className="btn btn-danger" onClick={toggleForm}>
                    {showForm ? 'Hide Form' : 'Add Donor'}
                </button>
            </div>
            {showForm && <DonorForm />}
        </div>
    );
};

export default DonorList;
