import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'
import Axios from "axios";

class Result extends React.Component {
 
componentDidMount=()=>{
 var score = {
   score: this.props.score,
   date: this.props.date,
 };
 let request = Axios({
   method: "POST",
   url: "http://localhost:5000/addscore",
   data: score,
   headers: { "x-auth-token": window.localStorage.getItem("token") },
 });
 request
   .then((res) => {
     console.log(res);
   })
   .catch((err) => {
     console.log(err);
   });
}
  


  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="score">
          You scored {this.props.score}/10 correct answer !
        </div>
        {this.props.questionBank.length > 0 &&
          this.props.questionBank.map(({ question, correct }) => (
            <div className="question">
              {question}
              <br />
              Correct answer:-
              <button className="answerBtn">{correct}</button>
            </div>
          ))}
        <div>
          <button
            onClick={this.props.playAgain}
            className="btn btn-warning float-right"
          >
            Play again
          </button>
          <Link  className="btn btn-warning float-right mr-2" to="/play/results">
            Results
          
          </Link>
        </div>
      </div>
    );
  }
}

export default Result