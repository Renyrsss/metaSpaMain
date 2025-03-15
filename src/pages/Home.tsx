import React from "react";
import OnlineConsultEmergency from "../components/OnlineConsultEmergency";
import SignToDoctor from "../components/SignToDoctor";

import ModalDoctor from "../components/ModalDoctor";

function Home() {
    return (
        <div className=' '>
            <OnlineConsultEmergency />
            <SignToDoctor />
        </div>
    );
}

export default Home;
