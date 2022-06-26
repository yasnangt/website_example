import {NavLink} from 'react-router-dom';

export default function Nav()
{
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
    }

    
    return(

        <nav className='main-nav'>
            <div className='left-bar bg-amber100'>
            <NavLink to="/" ><button className='l-nav-btn px-8 py-4 logo'>LOGO</button></NavLink>
            <NavLink to="/"><button className='l-nav-btn px-8 py-4'>Anasayfa</button></NavLink>
            <NavLink to="/explore" > <button className='l-nav-btn px-8 py-4'>Keşfet</button></NavLink>
            <NavLink to="/help" ><button className='l-nav-btn px-8 py-4'>Destek</button></NavLink>
            <NavLink to="/signup" ><button className='l-nav-btn px-8 py-4'>Kayıt Ol</button></NavLink>
            
            
            </div>
            <div className='right-bar ' >
            <button className='r-nav-btn w-16 '><span>TÜRKÇE</span> </button>
            <NavLink to="/login" ><button className='r-nav-btn w-36 login-btn'>Giriş Yap</button></NavLink>
            </div>
            
        </nav>

    );

}