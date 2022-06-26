import Nav from "../homePages/Nav";
export default function Auth(){
    return(
        <>
        <Nav/>
        <main className='main-content'>
        
        <div className='top'>
          <h1>Kayıt Ol</h1>
        </div>
          
        <div >
          <form className='form-cont'>
            
            <div className='box-cont'> 
                <label>Username</label><br/>
                <input className='form-input' ></input>
            </div>
            <div className='cont'> 
              <div className='box-cont'>
                <label>   Name  </label> <br/>
                <input className='form-input' ></input>
              </div>
              <div className='box-cont'>
                <label>Lastname</label><br/>
                <input className='form-input' ></input>
              </div>
            </div>
            <div> 
              <div className='box-cont'>
                <label>E-mail</label> <br/>
                <input className='form-input' ></input>
              </div>
            </div>
            <div className='cont'>
              <div className='box-cont'>
                <label> Password</label><br/>
                <input className='form-input' ></input>
              </div>
              <div className='box-cont'>
                <label>Confirm Password</label><br/>
                <input className='form-input' ></input>
              </div>  
            </div>
            <div className='btn-cont'>
              <button className='btn-dec' type='submit' >Submit</button>
            </div>
          </form>
    
        </div>
    
      </main>
      </>
    );

}