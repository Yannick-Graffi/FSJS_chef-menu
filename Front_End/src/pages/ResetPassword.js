import React, { useParams } from "react";
import axios from "axios";

function ResetPassword() {
    const {id} = useParams()
    return <div>Token : {id}</div>
    
}

export default ResetPassword;