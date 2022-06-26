import { Routes, Route, Link, Navlink} from 'react-router-dom';

import Explore from '../Pages/explore/Explore';
import Home from '../Pages/homePages/Home';
import Help from '../Pages/destek/Help';
import Register from '../Pages/register/register';
import Login from '../Pages/login/Login';


export default function Rt(){

    return( 
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/explore' element={<Explore/>}/>
                <Route path='/help' element={<Help/>} />
                <Route path='/signup' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </>
    )
}