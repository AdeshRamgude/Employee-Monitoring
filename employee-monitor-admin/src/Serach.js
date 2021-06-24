import React,{useState,useEffect} from 'react';

function Serach(props) {
    const initialFieldValues={
        empid: '',
        date: ''
    }
    
    var [values,setValues]=useState(initialFieldValues)
    
    const handleInputChange= e =>{
        var{name,value}=e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e=>{
        e.preventDefault();
        props.addOrEdit()
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="searchbox input-field">
                    <input type="text" placeholder="EMP ID" name="empid" 
                    value={values.empid} onChange={handleInputChange}/>
                    <input type="text" placeholder="Date" name="date" 
                    value={values.date} onChange={handleInputChange}/>
                    <button className="btn-floating #ef5350 red lighten-1" type="submit"><i class="material-icons right">search</i></button>
                </div>
            </form>
        </div>
    )
}

export default Serach
