import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import './App.css';


function Agecal() {

    const [date, setdate] = useState("")
    const [age, setage] = useState("")
    const [display, setdisplay] = useState(false)
    const [err, seterr] = useState("")


    const handleAge = (event) => {
        console.log(event.target.value)
        setdate(event.target.value);
    }                   

    // console.log(date)
    useEffect(() => {

        let dob = new Date(date);
        console.log(dob);
        let today = new Date();
        let ages = (today.getFullYear()) - (dob.getFullYear())
        console.log(ages,"dfghjk");
        setage(ages);
        console.log(age);
    }, [date])

    const showAge = () => {
        console.log("mohan")
        if(age>=1&&age<=99)
        {
            setdisplay(!display);
            seterr("")
        }
        else{
            setdisplay(false)
            seterr("Please Enter The Correct Input")
        }

    }
    return (
        <>



        <div className='card shadow d-inline-block p-3 col-4 pt-5 pb-5 bg-warning mohan '>
            <h1>Age Calculation</h1>
           <p> <input type="date" onClick={(e) => { handleAge(e) }} /></p>
            <p><span style={{color:"red"}} >{err}</span></p>
            <p> <button onClick={(event) => { showAge(event) }}>Get your Age</button></p>
            {display ? <p>Your Current Age is:  {age} years </p> : ""}

        </div>
        </>
    )
}

export default Agecal