import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DonationList = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/donations')
            .then(response => setDonations(response.data))
            .catch(error => console.error('Error fetching donations:', error));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-danger">Donation List</h2>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Donor ID</th>
                        <th>Donation Date</th>
                        <th>Quantity</th>
                        <th>Blood Type</th>
                    </tr>
                </thead>
                <tbody>
                    {donations.map(donation => (
                        <tr key={donation.id}>
                            <td>{donation.id}</td>
                            <td>{donation.donor_id}</td>
                            <td>{donation.donation_date}</td>
                            <td>{donation.quantity}</td>
                            <td>{donation.blood_type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonationList;
