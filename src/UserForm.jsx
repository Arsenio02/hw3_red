import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserForm = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        gender: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        dispatch({
            type: 'UPDATE_USER',
            payload: formData
        });
    };

    return (
        <div>
            <h1>User Information</h1>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleInputChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <button onClick={handleSubmit}>Save</button>
            <div>
                <h2>User Data:</h2>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
            </div>
        </div>
    );
};

export default UserForm;
