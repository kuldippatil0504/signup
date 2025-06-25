import { useState } from "react";
import { Navigate } from "react-router-dom";

const Loginsignup = ()=>{
    const[action,setaction] = useState("Login");
    const[name,setname] = useState("");
    const [email, setemail] = useState("");
    const [password,setpasswqord] = useState("");
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();


        if(action == "Login"){
            if(!email || !password){
                alert();
                return;
            }
            alert;
            Navigate
        }else{
            if(!email || !password || !name ){
                alert;
                return;
            }
            alert;
            
        }

    };

    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>

            </div>
        <form onSubmit={handleSubmit} className="inputs">
            {action=== "sign up" &&(
                <div className="input">
                    <img src={} alt="" />
                    <input type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)} />
                </div>
            )}
            <div className="input">
                <img src="" alt="" />
                <input type="text"
                placeholder=""
                alt=""
                value={email}
                onChange={(e)=> setpasswqord(e.target.value)} />
            </div>
            

            {action === "login" && (
                <div className="forgot-pass">lost pass <span>
                    </span></div>
            )}

            <div className="submit-container">
                {action !== "sign up " && (
                    <div className="submit" onClick={()=>setaction("Login")}>
                        Login
                    </div>
                )}
            </div>

            <button type="submit">

            </button>
        </form>
        </div>
    );

}