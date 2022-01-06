import React , { Component } from "react"
import fire from "./fire";
import "./Newsfirebase.css"

class Newsfirebase extends Component{

    state={
        text : ""
    }

    handletext=e=>{
        this.setState(
            {
                text : e.target.value
            }
        )
    }

    handleSubmit=e=>{
        let messageRef = fire.database().ref("messages").orderByKey().limitToLast(100);
        fire.database().ref("messages").push(this.state.text)
        this.setState({
            text : ""
        })

    }

    render(){
        return(
            <>
            <div className="news_section">
            <div className="news_input">
            <h2>Update news</h2>
            <input type="text" onChange={this.handletext} id="inputText" placeholder="News" name="News"/>
            <button onClick={this.handleSubmit} >Submit</button>
            </div>
            </div>
            </>
        );
    }
}

export default Newsfirebase;




