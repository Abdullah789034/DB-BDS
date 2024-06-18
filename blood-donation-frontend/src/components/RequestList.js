import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RequestList = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace 'http://localhost:5000/requests' with your actual API endpoint
        axios.get('http://localhost:5000/requests')
            .then(response => {
                setRequests(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching data');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading requests...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-danger">Blood Requests</h1>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Hospital ID</th>
                        <th>Blood Type</th>
                        <th>Request Date</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.hospital_id}</td>
                            <td>{request.blood_type}</td>
                            <td>{new Date(request.request_date).toLocaleDateString()}</td>
                            <td>{request.quantity}</td>
                            <td>{request.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestList;
