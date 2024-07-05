
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://hostserver-server.vercel.app/student', values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className=" Ccontainer">
            <form onSubmit={handleSubmit} className="Cform">
                <h2>Add Student</h2>
                <div className="Cform-group">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" required
                        onChange={e => setValues({ ...values, name: e.target.value })} />
                </div>
                <div className="Cform-group">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" required
                        onChange={e => setValues({ ...values, email: e.target.value })} />
                </div>
                <button className="Cbtn">Submit</button>
            </form>
        </div>
    );
}

export default Create;
