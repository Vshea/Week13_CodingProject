import React from 'react';
import '../index.css';


export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', backgroundColor: '#b0e1c3'}}>
                        <h3 className="mb-4">Login</h3>
                        <form id="loginForm">
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" name="username" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}