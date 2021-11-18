import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Model from "./model";

function BaseModal() {
    const [open, setOpen] = useState(false);

    const ToggleModal = () => {
        setOpen(!open)
    }
    return (
        <>           
            <Button onClick={ToggleModal}>Open modal</Button>
            <Model show={open} ToggleModal={ToggleModal} />
        </>
    )
}

export default BaseModal;