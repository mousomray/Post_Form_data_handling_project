import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Showuser = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadmore, setloadmore] = useState(10);

    const fetchdata = async () => {
        
        const apiUrl = "https://tureappservar.onrender.com/alluser"
        
        const response = await axios.get(apiUrl);
        setUser(response?.data?.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchdata();
    }, []);

    const handleloadmore = () => {
        setloadmore(prev => prev + 10);
    }

    if (loading) {
        return (
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        );
    }


    return (
        <div className="container-fluid mt-5">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Image</th>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Status</th>
                        <th>Create Date</th>
                        <th>Update Date</th>
                    </tr>
                </thead>
                <tbody>
                    {user.slice(0,user.length).reverse().slice(0, loadmore).map((value,index) => (
                        <tr key={value.id}>
                            <td><img src={value.photo} alt="" style={{ height: '60px', width: '100%', borderRadius: '100%' }} /></td>
                            <td>{index+1}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.phone}</td>
                            <td>{value.city}</td>
                            <td>{value.status}</td>
                            <td>{value.createdAt}</td>
                            <td>{value.updatedAt}</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            {loadmore < user.length ? (
                    <div className="text-center mt-3">
                        <button className="btn btn-dark" onClick={handleloadmore}>Load More</button>
                    </div>
                ) : null}
        </div>
    );
};

export default Showuser;
