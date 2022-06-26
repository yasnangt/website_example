import Nav from "../homePages/Nav";
import './login.css';
export default function Login(){
    return(
    <>
        <Nav/>
        <div className="center">
            <div>
                <div className="topic">    
                    <h1 >Login</h1>
                </div>
                <form className="form-cont">
                    
                        <div className='box-cont'>
                            <label>Username</label><br/>
                            <input className='form-input' ></input>
                        </div>
                        <div className='box-cont'>
                            <label>Password</label><br/>
                            <input className='form-input' type="password" ></input>
                        </div>
                        <div className="pass-forget">
                        <a href="#">Şifremi Unuttum</a>
                            
                        </div>
                        <div className='btn-cont'>
                            <button className='btn-dec' type='submit' >Submit</button>
                        </div>
                       
                </form>
            </div>
        
        </div>
    
    </>

    )


}