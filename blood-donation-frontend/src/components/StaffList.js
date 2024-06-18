import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StaffList = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/staff')
            .then(response => setStaff(response.data))
            .catch(error => console.error('Error fetching staff:', error));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-danger">Staff List</h2>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Contact Info</th>
                        <th>Hospital ID</th>
                    </tr>
                </thead>
                <tbody>
                    {staff.map(member => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.contact_info}</td>
                            <td>{member.hospital_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffList;
