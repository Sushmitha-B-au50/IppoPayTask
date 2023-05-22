import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addData } from './actions/dataAction';


function Home() {
    const dispatch = useDispatch();
    const [Password, setPassword] = useState("");
    const [Result, setResult] = useState(0);
   
// function to check repeated chars
function CheckForRepeat(startIndex, originalString, charToCheck) {
	var repeatCount = 1;
	for(var i = startIndex+1; i<=startIndex+2; i++) {  // this loop will goes on upto next 2 indexes to check for repetation
		if(originalString.charAt(i) === charToCheck) {
			repeatCount++;
			if(repeatCount==3)
				return 'YES';
		} 
	}
}


    const addValue = async () => {
        debugger;
       try 
       {
        if(!Password === '')
        {
            let minSteps = 0;
            var numbers = /[0-9]/;  //regex for numbers
            var uppercase = /[A-Z]/;  //regex for uppercase 
            var lowercase = /[a-z]/; //regex for lowercase 

            if(Password.length<6)
              minSteps = 6-(Password.length)   // to find the ministeps needed       
            if(Password.length>=6  &&  Password.length<=20)
            {
                for(var i = 0; i< Password.length; i++) {
                    var numberOfRepeats = CheckForRepeat(i, Password, Password.charAt(i)); // it goes to another function to check for the repeated consective characters
                    if(numberOfRepeats === 'YES')
                    {
                        minSteps+=1; 
                    }
                }
                if(!Password.match(numbers))
                  minSteps +=1    //Password  should contain alteast one digit 
                if(!Password.match(uppercase))
                   minSteps +=1
                //    'Password  should contain alteast one uppercase letter';
                if(!Password.match(lowercase))
                   minSteps +=1       //    'Password  should contain alteast one lowercase letter ';
            }
            else{
                if(Password.length>20)
                  alert('Password  should be less than 20')
            }
            setResult(minSteps);
             
            let values = {Password,Result}
            let res = await dispatch(addData(values))
            debugger;
            if (res.status === 200) {
                debugger;
                alert(res.data.message);
            
            }
                else {
                    alert(res.response.data.message);  
                }
            }
            else
            {
              alert('password cannot be empty')
            }
    }           
        catch (err) {
            alert(err.data.message);
        }
    }
    return (
        <div>
            <Card className="text-center col-md-5 shadow mx-auto m-5">
                <Card.Title className="display-6 text-black"> Form Details</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="5">
                            Password 
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control type="text" placeholder="Password" name="Password" value={Password} onChange={(e) => {setPassword(e.target.value)}} />
                            </Col>
                        </Form.Group>
                        <Button as="input" variant="dark" type="button" onClick={addValue} value="Submit" />
                    </Form>
                </Card.Body>
            </Card>
            {Result>=0 ? (
           <p className="display-6 text-black">Steps required : {Result}</p>) : null}
        </div>
    );
}

export default Home;