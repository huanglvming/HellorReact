import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actionAdd, actionInit} from '../redux';

class SelectedList extends Component{
    
    componentWillMount(){
        this.props.handleInitSlection();
    }

    render(){
        const {handleAddItem,selection} = this.props;
        return(
            <div className="selectedList">
                <div className="selected-title">可选</div>
                <div className="selected-container">
                    <div className="selected-content">
                        {selection.map((item,i) =>{
                        return <div className="seleced-item" key={i} onClick={() =>{handleAddItem(i)}}>{item}</div> 
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToPros (state){
    return{
        selection: state.selection
    }
}
function mapDispatchToPros (dispatch){
    return{
        handleAddItem: (index) => {
            dispatch(actionAdd(index))
        },
        handleInitSlection: () =>dispatch(actionInit())
    }
}

export default connect(mapStateToPros,mapDispatchToPros)(SelectedList);