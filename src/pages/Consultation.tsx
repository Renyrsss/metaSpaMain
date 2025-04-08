import React from "react";
import { Outlet } from "react-router";
import Navigation from "../components/Navigation";

function Consultation() {
    return (
        <div className='container mx-auto   '>
            <Navigation />
            <div className=''>
                <Outlet />
            </div>
        </div>
    );
}

export default Consultation;
