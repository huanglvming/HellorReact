// action types
const INIT_SELECTED = 'INIT_SELECTED';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// action creator
export const actionInit = () =>{
    return{
        type: INIT_SELECTED,
        selection: ['a','b','c','d','e','f','g'] 
    }
}
export const actionAdd = (index) =>{
    return{
        type: ADD_ITEM,
        index
    }
}
export const acitonDelete = (index) =>{
    return{
        type: DELETE_ITEM,
        index,
    }
}

let initialState = {
    selection: [],
    selected: []
}
// reducer
export const reducer = (state = initialState,action) =>{
    switch (action.type){
        case INIT_SELECTED:
            return {
                ...state,
                selection: action.selection
            };
        case ADD_ITEM:
            return {
                ...state,
                selected: [...state.selected,state.selection[action.index]],
                selection: [
                    ...state.selection.slice(0,action.index),
                    ...state.selection.slice(action.index+1)
                ]
            };
        case DELETE_ITEM:
            return {
                ...state,
                selection: [...state.selection,state.selected[action.index]],
                selected: [
                    ...state.selected.slice(0,action.index),
                    ...state.selected.slice(action.index+1)
                ]
            };
        default:
            return initialState;
    }
}