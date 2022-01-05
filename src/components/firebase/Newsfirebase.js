import React , { Component, useState } from "react"
import "./Newsfirebase.css"
    
    const Newsfirebase = ()=>{
        
        const[user, setUser] = useState ({
            name:''
        });
        
        let name, value;
        const getUserData = (event) =>{
            name = event.target.name;
            value = event.target.value;
            
            setUser({...user, [name]:value})
        };


        let handleSubmit = () =>{
            
            const postData = async(e) =>{
                e.preventDefault();

                const name = user
            const res = await fetch('https://college-project-337223-default-rtdb.firebaseio.com/collegeproject.json',{
                    method : "POST",
                    headers:{
                        "Contant-Type":"application/json",
                    },
                    body:JSON.stringify({
                        name
                    })
                });
            };


            // let pk = document.getElementById('newsupdate');
            // let pks = document.getElementById('inputText')
            // console.log(pk)
            // console.log(pks.value);
        }

        return( 
            <>
            <div className="news_section">
            <div className="news_input">
            <h2>Update News</h2>
            <input
                type="text"
                id="inputText"
                placeholder="Update News"
                name="name"
                value={user.name}
                onChange={getUserData}
                autoComplete="off"
                method = "POST"
                required
                />
            <button onClick={handleSubmit}>Submit</button>
            </div>
            </div>
            </>     
        );
    }


export default Newsfirebase;