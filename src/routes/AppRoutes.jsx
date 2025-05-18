import { Route, Routes } from 'react-router';
import MainLayout from '../pages/layouts/MainLayout';
import About from '../pages/About';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Login from '../pages/Login';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='shop' element={<Shop/>}/>
                    <Route path='login' element={<Login/>}/>
                </Route>
            </Routes>   
        </>
    );
};

export default AppRoutes;