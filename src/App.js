
import { useState } from 'react';
import './App.css';

function App() {
   const initialvalue={
    username:"",
    email:"",
    password:""
   }
   const[formData,setFormData]=useState(initialvalue);
   const [error,setError]=useState({})
      console.log(formData)
     const handleOnchange=(e)=>{
         const {name,value}=e.target
         setFormData({...formData,[name]:value}) }

      const handleOnsubmit=(e)=>{
        e.preventDefault();
          setError(validate(formData))
        
      }
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };
    
  return (
    <>
         <div className="container">
          <div className="row">
            <div className="col-12 ms-5">
            <div className="contain"  style={{width:"60vh ",marginTop:"10%", marginLeft:"25%"}}>
            <form>
    <h1>Form Validation</h1>
    <div className="form-group">
    <label for="exampleInputEmail1">UserName</label>
    <input
        type='text'
        name='username'
       value={formData.username}
       onChange={handleOnchange}
     
     className="form-control"
      id="exampleInputEmail1"
       aria-describedby="emailHelp" 
       placeholder="username..."/>
    <span id="emailHelp" className="form-text text-danger">{error.username}</span>
  </div>
    
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
      type='text'
        name='email'
       value={formData.email}
       onChange={handleOnchange}
     className="form-control"
      id="exampleInputEmail1"
       aria-describedby="emailHelp" 
       placeholder="Enter email"/>
  <span id="emailHelp" className="form-text text-danger">{error.email
  }</span>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input
        type='text'
        name='password'
        value={formData.password}
       onChange={handleOnchange}
    className="form-control" 
    id="exampleInputPassword1"
     placeholder="Password"/>
      <span id="emailHelp" className="form-text text-danger">{error.password}</span>
  </div>
 
  <button type="submit" onClick={handleOnsubmit} className="btn btn-primary mt-5">Submit</button>
</form>
            </div>
          
            </div>
          </div>
         </div>
   
    <h1>{formData.username}</h1>
    <h1>{formData.email}</h1>
    <h1>{formData.password}</h1>
    </>
    
  );
}

export default App;
