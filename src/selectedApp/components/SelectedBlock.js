import React, { Component } from 'react';
import {connect} from 'react-redux';
import {acitonDelete} from '../redux';

class SelectedBlock extends Component{
    render(){
        const {selected,handleDeleteItem} = this.props;
        return(
            <div className="selectedBlock">
                <div className="selected-title">已选</div>
                <div className="selected-container">
                    <div className="selected-content">
                        {selected.map((item,i) =>{
                            return <div className="seleced-item" key={i} onClick={() =>handleDeleteItem(i)}>{item}</div>
                        })}
                    </div>
                </div>
            </div>
        )                                                                                                                                                         
    }
}

function mapStateToProps(state){
    return{
        selected: state.selected
    }
}

function mapDispatchToProps(dispatch){
    return{
        handleDeleteItem: (i) => {
            dispatch(acitonDelete(i))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectedBlock);