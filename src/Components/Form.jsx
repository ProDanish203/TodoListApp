import React, { useState } from 'react'

export const Form = ({ onSubmit }) => {

    const [input, setinput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(input.length !== 0){
    
          onSubmit(input)
    
          setinput("");
    
        }else{
          alert("Text fields cannot be empty!!!");
        }
      }

  return (
    <>
    <form className='form' onSubmit={handleSubmit}>

        <div className="input-field">
        <input type="text" className='input' value={input} onChange={e => setinput(e.target.value)} placeholder='Add a todo...'/>
        </div>
        <div className="input-field">
        <button className="btn" >Add</button>
        </div>

    </form>
    </>
  )
}
