import React, {Fragment,useState} from 'react';
import {Link,Redirect} from 'react-router-dom'
import { Modal, Button, Form } from "react-bootstrap";
import axios from 'axios'
function Home(){
   const [show, setShow] = useState(false);
  // const[modal,setModal]=useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  // const[auhtenticated,setAuthenticated] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
     
    var user = {
      name: name,
      email: email,
      password:password,
    };
let request = axios({
  method: "POST",
  url: "http://localhost:5000/register",
  data: user,
});
request
    .then((res) => {
      console.log(res);
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("name",res.data.user.name)
      localStorage.setItem("email", res.data.user.email);

       setShow(false)
       
    })
    .catch((err) => {
     console.log(err)
    });
   
};

  

  const haandleLogin = (e) => {
    e.preventDefault();

    var user = {
      email:email,
      password:password,
    };
   let request = axios({
     method: "POST",
     url: "http://localhost:5000/login",
     data: user,
   });
  
     request
       .then((res) => {
         console.log(res);
         localStorage.setItem("token", res.data.token);
         localStorage.setItem("email", res.data.user.email);
         localStorage.setItem("name", res.data.user.name);


         setShowLogin(false)  
       })
       .catch((err) => {
         console.log(err)
       });
       
  };

 
 

  // open and close login model
  const handleShowLogin = () => {
    setShowLogin(true);
    setShow(false);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  // open and close register model
  const handleShow = () => {
    setShow(true);
    setShowLogin(false);
  };
  const handleClose = () => {
    setShow(false);
  }
   return (
     <Fragment>
       {localStorage.getItem('token') ? (
         <Redirect to="/play/instructions" />
       ) : (
         <Redirect to="/" />
       )}
       <div id="home">
         <section>
           <div className="sec">
             <span>
               <i className="fa fa-cube" aria-hidden="true"></i>{" "}
             </span>
           </div>
           <h1 className="text-white text-center">Corona Quiz</h1>
           {/* <div className="play-button">
                      <Link  to='/play/instructions' className="btn">Play</Link>
                </div> */}
           <div className="auth-button">
             <Link className="text-white login" onClick={handleShow}>
               Register
             </Link>
             <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                 <Modal.Title>Sign Up</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                 <Form>
                   <Form.Group controlId="formBasicname">
                     <Form.Label>Name</Form.Label>
                     <Form.Control
                       type="text"
                       placeholder=" enter name..."
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                     />
                   </Form.Group>
                   <Form.Group controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control
                       type="email"
                       placeholder="Enter email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                     />
                     <Form.Text className="text-muted">
                       We'll never share your email with anyone else.
                     </Form.Text>
                   </Form.Group>

                   <Form.Group controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control
                       type="password"
                       placeholder="Password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                     />
                   </Form.Group>
                   <Button
                     variant="primary"
                     className="mt-3"
                     type="submit"
                     block
                     onClick={(e) => handleSubmit(e)}
                   >
                     Submit
                   </Button>
                   <br />
                   <p>
                     if you are already registered click here
                     <Link style={{ color: "blue" }} onClick={handleShowLogin}>
                       Login
                     </Link>
                   </p>
                 </Form>
               </Modal.Body>
             </Modal>
             <Link className=" text-white register" onClick={handleShowLogin}>
               Login
             </Link>
             <Modal show={showLogin} onHide={handleCloseLogin}>
               <Modal.Header closeButton>
                 <Modal.Title>Log In</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                 <Form>
                   <Form.Group role="form" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control
                       type="email"
                       placeholder="Enter email"
                       onChange={(e) => setEmail(e.target.value)}
                     />
                     <Form.Text className="text-muted">
                       We'll never share your email with anyone else.
                     </Form.Text>
                   </Form.Group>
                   <Form.Group role="form" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control
                       type="password"
                       placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}
                     />
                   </Form.Group>
                   <Button
                     variant="primary"
                     className="mt-3"
                     type="submit"
                     onClick={(e) => haandleLogin(e)}
                     block
                   >
                     Submit
                   </Button>
                   <br />
                   <p>
                     if you are not login click here
                     <Link style={{ color: "blue" }} onClick={handleShow}>
                       Signup
                     </Link>
                   </p>
                 </Form>
               </Modal.Body>
             </Modal>
           </div>
         </section>
       </div>
     </Fragment>
   );
  }
 


export default Home;