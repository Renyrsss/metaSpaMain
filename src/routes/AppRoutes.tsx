import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Clinic from "../pages/Clinic";
import Consultation from "../pages/Consultation";

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/clinic' element={<Clinic />} />
            <Route path='/consultation' element={<Consultation />} />
        </Routes>
    );
}

export default AppRoutes;
