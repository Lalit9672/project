import React , { Component } from "react"
import "./Newsfirebase.css"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

    const Newsfirebase = ()=>{
        let handleSubmit = () =>{
            let pk = document.getElementById('newsupdate');
            let pks = document.getElementById('inputText')
            console.log(pk)
            console.log(pks.value);
        }

        return( 
            <>
            <div className="news_section">
            <div className="news_input">
            <h2>Update News</h2>
            <input type="text" id="inputText" placeholder="News" name="News"/>
            <button onClick={handleSubmit}>Submit</button>
            </div>
            </div>
            </>     
        );
    }


export default Newsfirebase;