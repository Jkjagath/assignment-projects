import React from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {



    let navigate=useNavigate();
    let navigateToLogin=()=>{
        navigate("/Login")
    }


  return (
    <div>
        <form className='container border'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        <h3 style={{cursor:"pointer"}} onClick={navigateToLogin} >Alredy Have an account? Login Here</h3>
      </form>

    </div>
  )
}

export default SignUp