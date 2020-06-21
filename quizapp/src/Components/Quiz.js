import React from 'react'
import '../App.css'
import quizService from '../quizService/question'
import QuestionBox from './questionBox'
import Result from './Result'
import {Link} from 'react-router-dom'

class Quiz extends React.Component {

    state = {
        questionBank: [],
        score:0,
        response:0,
        answer:[],
        // date:Date(Date.now()).toString()
        date:new Date().toDateString().split(' ').slice(1,4).join(' ')
    }
    getQuestions = () => {
        quizService().then(res => {
            this.setState({
                questionBank: res,
               
            })
        })
    }
    playAgain=()=>{
        this.getQuestions()
        this.setState({
            score:0,
            response:0
        })
    }
    computeAnswer=(text,correctAns)=>{
    console.log(text,correctAns)
    this.setState({
        answer:[...this.state.answer,text]
    })
    if(text===correctAns){
        this.setState({
            score:this.state.score + 1
        })
    }
    this.setState({
        response:this.state.response < 10 ? this.state.response + 1: 10
    })
 
  

    }
    logoutUser=()=>{
        localStorage.removeItem('token')
    }
    componentDidMount = () => {
        this.getQuestions();
    }
    render() {
        return (
          <div className="container">
            <h1 className="title">
              Question
              <Link
                to="/"
                className="logout text-white float-right"
                onClick={this.logoutUser}
              >
                Logout
              </Link>
              
              <span className="float-right mr-3">
                {localStorage.getItem("name")}
              </span>
            </h1>
            <div className="questionBox">
              <div className="question">
                {this.state.questionBank.length > 0 &&
                  this.state.response < 10 &&
                  this.state.questionBank.map(
                    ({ question, answers, correct, questionId }) => (
                      <QuestionBox
                        question={question}
                        options={answers}
                        key={questionId}
                        selected={(text) => this.computeAnswer(text, correct)}
                      />
                    )
                  )}
                {this.state.response === 10 ? (
                  <Result
                    answer={this.state.answer}
                    questionBank={this.state.questionBank}
                    score={this.state.score}
                    playAgain={this.playAgain}
                    date={this.state.date}
                  />
                ) : null}
              </div>
            </div>
          </div>
        );
    }
}

export default Quiz