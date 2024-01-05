import { Navigate } from "react-router-dom";

function Protected(props) {
    const {login,children} = props;
    if (!login){
        console.log('first')
        return <Navigate  to={'/login'}/>
    }
    else{
        return children
    }
}
export default Protected