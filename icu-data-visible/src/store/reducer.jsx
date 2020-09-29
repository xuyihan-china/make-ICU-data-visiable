// import {heartArray,breathArray,bloodArray} from '../random'
const defaultState ={
    // heartArray,
    // breathArray,
    // bloodArray
}
export default (state= defaultState,action)=>{
    if(action.type === ''){
        let newState = JSON.parse(JSON.stringify(state))
        return newState
    }
    if(action.type===''){
        let newState = JSON.parse(JSON.stringify(state))
        return newState
    }
    return state
}