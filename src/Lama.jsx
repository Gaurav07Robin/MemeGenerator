import React from "react";
import { useState } from "react";
const Lama = () => {

  const[data,setData] = useState({
    fullname: "",
    phone : "",
    email : "",
    message : ""
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;
    setData((preValue) => {
      return{
        ...preValue,
        [name] : value,
      }
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname},${data.phone},${data.email},${data.message}`);
  };


return(
<>
<div className="my-5">
<h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact_div">
<div className="row">
<div className="col-md-6 col-10 mx-auto">
<form onSubmit={formSubmit}>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" 
  name = "fullname"
  value={data.fullname}
  onChange={InputEvent}
  placeholder="Enter Your Name Here"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" 
  name = "phone"
  value={data.phone}
  onChange={InputEvent}
  placeholder="9874xxxxxx"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" 
  name = "email"
  value={data.email}
  onChange={InputEvent}
  placeholder="name@example.com"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Type Your Message Here</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" 
  name = "message"
  value={data.message}
  onChange={InputEvent}
  rows="3"></textarea>
</div>

<div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
</div>
</div>
</div>
</>
)
    };

export default Lama;
