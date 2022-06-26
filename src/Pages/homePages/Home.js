import Nav from './Nav';
import AuthPage from './AuthPage';

export default function Home (){
    return(
    <>
        <Nav/> 
        <div className='homeCenter'>
        <h1>Logo'ya Hoşgeldin</h1>
        </div>
        <AuthPage/>
    </>
    )
}