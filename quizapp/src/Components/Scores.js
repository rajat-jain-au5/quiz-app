import React, { Component } from "react";
import { Link} from 'react-router-dom'
import axios from "axios";
import {Redirect} from 'react-router-dom'
export class Scores extends Component {
      state={
            scores:[],
            name:"",
            email:""
      }
      componentDidMount=()=>{
      axios.get("http://localhost:5000/getscore", {
        headers: {
          "x-auth-token": localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        console.log(data);
        this.setState({
              scores:data.data.Score,
              name:data.data.name,
              email:data.data.email
        },()=>console.log(this.state))
      });
  };
            //  request
            //    .then((res) => {
            //      console.log(res);
            // //      this.setState({
            // //        scores: res.data.Score,
            // //        email: res.data.email,
            // //        name: res.data.name,
            // //      });
            //    })
            //    .catch((err) => {
            //      console.log(err);
            //    });
      
  render() {
         if (localStorage.getItem("token") == null) {
           return <Redirect to="/" />;
         }
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">
              Score Board{" "}
              <span>
                <Link className="btn btn-warning float-right " to="/play/quiz">
                  Play again
                </Link>
              </span>{" "}
            </h1>
            

            <table className="table">
              <thead>
                <th>Score</th>
                <th>Date</th>
              </thead>
              <tbody>
                {this.state.scores.map((score, index) => {
                  return (
                    <tr key={index}>
                      <td>{score.score}</td>
                      <td>{score.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Scores;
