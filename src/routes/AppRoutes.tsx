import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Clinic from "../pages/Clinic";
import Consultation from "../pages/Consultation";

import ConsultationCancel from "../pages/ConsultationCancel";
import ConsultationFuture from "../pages/ConsultationFuture";
import ConsultationPast from "../pages/ConsultationPast";

import { Navigate } from "react-router";
import Login from "../pages/Login";

import PrivateRoute from "../components/PrivateRoute";

function AppRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route
                path='/'
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                path='/clinic'
                element={
                    <PrivateRoute>
                        <Clinic />
                    </PrivateRoute>
                }
            />
            <Route path='/consultation' element={<Consultation />}>
                {/* <Route index element={<ConsultationFuture />} /> */}
                <Route path='future' element={<ConsultationFuture />} />
                <Route index element={<Navigate to='future' replace />} />

                <Route path='past' element={<ConsultationPast />} />
                <Route path='cancel' element={<ConsultationCancel />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
