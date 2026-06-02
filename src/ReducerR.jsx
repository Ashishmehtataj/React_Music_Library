import { useReducer } from "react";

const initialState = {count:0}

function Counter(state,action){
    switch(action.type){
        case "I":
            return {count : state.count+1}
        
        case "D":
            return {count :state.count-1}
        
        case "R":
            return {count :0}
        
        default :
            return state;
    }
}

function ReducerR(){
    const[state,dispatch] = useReducer(Counter,initialState);
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-400">
            <div className=" bg-gray-200 rounded-4xl w-70 h-80 border-2 border-gray-400 hover:border-green-300">
                <div className="text-center">
                <h1 className="text-2xl p-6 mb-2 border-none outline-none rounded-2xl border-2">Counter : {state.count}</h1>
            </div>
            <div className="ml-12 ">
            <div>
                <button className="ml-9 border-2 border-gray-400 rounded-2xl p-4 cursor-pointer hover:bg-gray-300 active:bg-gray-500" onClick={()=>{
                    dispatch({type:"I"})
                }}>Increament</button>
            </div>
            <div>
                <button className="ml-9 border-2 mt-2 border-gray-400 rounded-2xl p-4 cursor-pointer hover:bg-gray-300 active:bg-gray-500" onClick={()=>{
                    dispatch({type:"D"})
                }}>Decrement</button>
            </div>
            <div>
                <button className="ml-12 w-22 border-2 mt-2 mb-2 border-gray-400 rounded-2xl p-4 cursor-pointer hover:bg-gray-300 active:bg-gray-500" onClick={()=>{
                    dispatch({type:"R"})
                }}>Reset</button>
            </div>
            </div>  
            </div>
        </div>
    )
}
export default ReducerR;