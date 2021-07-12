import { FC, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context as AppContext } from '../context/app-context';

const Callback: FC = () => {
    const { state } = useContext(AppContext)

    if (state.isAuthenticated) {
        return <Redirect to='/demo' />
    }
    return null
}

export default Callback;