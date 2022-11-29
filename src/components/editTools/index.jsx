import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";



export default function EditTools(){
    const [inputs , setInputs]=useState({
        headertext : 'test',
        hedersize : '30',
        hedercolor : '#FF0000',
        descriptiontext : 'description Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        descriptionsize : '20',
        descriptioncolor : '#008000',
        backgroundcollor : `#808080`,
        borderradious : '25',
        bordersize : '1',

    })
    const change=(e)=>{
     setInputs({...inputs,[e.target.name] : e.target.value})
    }
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:'chnages', payload: inputs})
    },[inputs])

    return  <div className='P-edit-tool'>
        <form>
            <div>
                <label>
                    <span>Change Header</span>
                    <input type="text" name='headertext' value={inputs.headertext} onChange={change}/>
                </label>
            </div>
            <div>
                <label>
                    <span>Change Description</span>
                    <input type="text" name='descriptiontext' value={inputs.descriptiontext}  onChange={change}/>
                </label>
            </div>
            <div>
                <label>
                    <span>Header Color</span>
                    <input type="color" value={inputs.hedercolor} name='hedercolor' onChange={change}/>
                </label>
            </div>
            <div>
                <label>
                    <span>Description Color</span>
                    <input type="color" value={inputs.descriptioncolor} name={'descriptioncolor'} onChange={change}/>
                </label>
            </div>
            <div>
                <label>
                    <span>Header Font Size</span>
                    <input type="range" min={10} max={40} value={inputs.hedersize} name={'hedersize'} onChange={change}/>
                </label>
            </div>
            <div>
                <label>
                    <span>Description  Font Size</span>
                    <input type="range" min={10} max={25} value={inputs.descriptionsize} name={'descriptionsize'} onChange={change}/>
                </label>
            </div>
            <div>
                <label>
                    <span>Body Background Color</span>
                    <input type="color" value={inputs.backgroundcollor} name={'backgroundcollor'} onChange={change}/>
                </label>
            </div>
            <div>
                <label>
                    <span>Border Radios</span>
                    <input type="range" min={0} max={50} value={inputs.borderradious} name={'borderradious'} onChange={change}/>
                </label>
            </div>
            <div>
                <label>
                    <span>Change Border Size</span>
                    <input type="range" min={0} max={10} value={inputs.bordersize} name={'bordersize'} onChange={change}/>
                </label>
            </div>

        </form>
    </div>
}