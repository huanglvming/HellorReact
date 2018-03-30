import React, { Component } from 'react';
import SelectedBlock from './components/SelectedBlock';
import SelectedList from './components/SelectedList';
import './style.css';

class SelectedApp extends Component{
    render(){
        return(
            <div className="SelectedApp">
                <SelectedBlock/>
                <SelectedList/>
            </div>
        )
    }
}

export default SelectedApp;