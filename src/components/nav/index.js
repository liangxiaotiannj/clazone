import React from 'react';
import {NavLink} from 'react-router-dom';

export default class nav extends React.Component{
    render(){
        return(
            <div>
                <NavLink to="/">index</NavLink> | 
                <NavLink to="/setting">page1</NavLink> | 
                <NavLink to="/product">page2</NavLink>
            </div>
        );
    }
}