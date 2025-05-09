import { Route, Routes } from 'react-router';
import MainLayout from '../pages/layouts/MainLayout';
import About from '../pages/About';
import Product from '../pages/Product';
import Home from '../pages/Home';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='product' element={<Product/>}/>
                </Route>
            </Routes>   
        </>
    );
};

export default AppRoutes;