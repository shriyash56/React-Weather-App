import React, { useState } from 'react'
import {Form ,Button} from "react-bootstrap";
export default function CityInput({city,setcity,fetching}) {
    const [error,seterror]=useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!city){
            seterror("input field empty")
        }
        else{
            seterror("");
            fetching(city);
        }
        
    }
    return (
        <div className="container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control value={city} type="email" placeholder="Enter email" onChange={(e)=>setcity(e.target.value)} />  
                </Form.Group>
                <p className="text-danger">{error}</p>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                 </Button>
            </Form>
        </div>
    )
}