import React, { useState } from 'react';
import axios from 'axios';

const DonorForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        blood_type: '',
        age: '',
        contact_info: '',
        registration_date: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/donors', formData)
            .then(response => alert('Donor added successfully!'))
            .catch(error => console.error('Error adding donor:', error));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-danger">Add New Donor</h1>
            <form onSubmit={handleSubmit} className="card p-4 shadow-lg">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Enter donor's name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="blood_type" className="form-label">Blood Type</label>
                    <input
                        type="text"
                        name="blood_type"
                        id="blood_type"
                        className="form-control"
                        placeholder="Enter blood type"
                        value={formData.blood_type}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        className="form-control"
                        placeholder="Enter age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contact_info" className="form-label">Contact Info</label>
                    <input
                        type="text"
                        name="contact_info"
                        id="contact_info"
                        className="form-control"
                        placeholder="Enter contact info"
                        value={formData.contact_info}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="registration_date" className="form-label">Registration Date</label>
                    <input
                        type="date"
                        name="registration_date"
                        id="registration_date"
                        className="form-control"
                        value={formData.registration_date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-danger mt-3">Add Donor</button>
            </form>
        </div>
    );
};

export default DonorForm;
