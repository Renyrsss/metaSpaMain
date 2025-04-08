import { observer } from "mobx-react-lite";

import { makeAutoObservable } from "mobx";

class vars {
    constructor() {
        makeAutoObservable(this);
    }

    showEmergencyModal = true;
    isOpen = false;
    showEmergencyModalFunc = () => {
        this.showEmergencyModal = !this.showEmergencyModal;
        console.log("btn");
    };

    open() {
        this.isOpen = true;
        // console.log("added");
    }

    close() {
        this.isOpen = false;
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }
}

export default new vars();
