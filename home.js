import React from 'react';
import '../index.css';
import LoginForm from './loginForm';
import Navigation from './navbar';

export default class Home extends React.Component {
    render() {
        return (
        <div> 
            <Navigation />,
            <LoginForm />
        </div>)
    }
}