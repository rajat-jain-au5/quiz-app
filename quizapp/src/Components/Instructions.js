import React, {Fragment } from 'react';
import {Link,Redirect} from 'react-router-dom';
class Instructions extends React.Component{
    render(){
         if (localStorage.getItem("token")==null) {
           return <Redirect to="/" />;
         }
        return (
          <Fragment>
            <div className="container">
              <div className="row">
                <div className="col text-center ml-4">
                  <h1>Instructions page</h1>
                  <h4 className="text-left">
                    Name : {localStorage.getItem("name")}{" "}
                    <h4>Email : {localStorage.getItem("email")}</h4>
                  </h4>

                  <Link className="btn btn-warning" to="/play/quiz">
                    Play quiz
                  </Link>
                  <div className="row mt-4">
                    <div className="col text-left ml-5 inst">
                      <h1>How to play the quiz</h1>
                      <p>
                        1. &nbsp;Ensure you read this guide from start to finish
                      </p>
                      <p>2. &nbsp;Each quiz consists of 10 questions</p>
                      <p>3. &nbsp;Each question has 4 options</p>
                      <p>
                        4. &nbsp;you submit answer of all question then showing{" "}
                        <br />
                        Your score with right answer
                      </p>
                      <p className="text-center text-white bg-success">
                        Best Of Luck
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
    }
}

export default Instructions
