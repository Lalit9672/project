import React , { Component, useState } from "react"
import "./Newsfirebase.css"
    
    const Newsfirebase = ()=>{    
        
        const[user, setUser] = useState ({
            heading:'',
            news:''
        });
        
        let name, value;
        const getUserData = (event) =>{
            name = event.target.name;
            value = event.target.value;
            
            setUser({...user, [name]:value})
        };

        const postData = async(e) =>{
                e.preventDefault();

                const {heading, news} = user;

                if (heading && news) {
                    const res = await fetch('https://college-project-337223-default-rtdb.firebaseio.com/collegeproject.json',{
                    method : "POST",
                    headers:{
                        "Contant-Type":"application/json",
                    },
                    body:JSON.stringify({
                        heading,
                        news
                    })
                }
                );
                    
                    if (res) {
                        setUser({
                            heading:"",
                            news:""
                        });
                    alert('Data Saved Successfully')
                    };
                } else {
                    alert('Please Fill all the spaces')
                }


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
                id="inputTextHeading"
                placeholder="Update News Heading"
                name="heading"
                value={user.heading}
                onChange={getUserData}
                autoComplete="off"
                method = "POST"
                required
                />

                <input
                type="text"
                id="inputText"
                placeholder="Update News"
                name="news"
                value={user.news}
                onChange={getUserData}
                autoComplete="off"
                method = "POST"
                required
                />
            <button onClick={postData}>Submit</button>
            </div>
            </div>
            </>     
        );
    }


export default Newsfirebase;