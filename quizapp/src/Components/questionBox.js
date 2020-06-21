import React from 'react';

class QuestionBox extends React.Component{
    state={
        answer:[],
    }
    setAnswer=(text)=>{
        this.props.selected(text)
        this.setState({
            answer:[...this.state.answer,text]
        })
}
 render(){
        return(
            <div className="questionBox">
                <div className="question">
                   {this.props.question}<br/>
                   {!this.state.answer.length > 0
                   
                   ? (this.props.options.map((text,index)=>{  
                    return <button key={index} className="answerBtn" onClick={()=>this.setAnswer(text)}>{text}</button>
                }))
                   :(this.state.answer.map((text,index)=>{
                    return <button key={index} className="answerBtn">{text}</button>
                }))}
                   
                   
                </div>
            </div>
        )
    } 
}

export default QuestionBox