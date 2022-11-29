import React from "react";
import { useSelector} from "react-redux";

export default function EditBox({description}){
    const state = useSelector(state=>state)

    return <div className='P-edit-box'
    style={
        {background  : state.backgroundcollor , border :`${state.bordersize}px solid black` , borderRadius : `${state.borderradious}px`}
    }>
        <h2
        style={
            {fontSize : `${state.hedersize}px`,color : state.hedercolor}
        }>{state.headertext}</h2>
        <p
            style={{fontSize : `${state.descriptionsize}px`,color : state.descriptioncolor}
        }>{state.descriptiontext}</p>
    </div>
}

