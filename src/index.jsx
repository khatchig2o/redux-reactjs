import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/index.scss"
import App from './App';
import {createStore} from "redux";
import { Provider} from "react-redux"

const initialvalue = {
    headertext : 'test',
    hedersize : '30',
    hedercolor : '#FF0000',
    descriptiontext : 'description Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    descriptionsize : '20',
    descriptioncolor : '#008000',
    backgroundcollor : `#808080`,
    borderradious : '25',
    bordersize : '1',

}
const reducer=(state=initialvalue,action)=>{
    switch (action.type){
        case  'chnages':
            state = action.payload
            break;
        default:
            break;
    }

    return state

}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
