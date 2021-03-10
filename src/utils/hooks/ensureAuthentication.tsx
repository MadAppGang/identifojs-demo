import { useContext, useEffect } from 'react';
import { Context as AppContext } from '../../context/app-context';
import { identifo } from '../../services/identifo';

export const useEnsureAuthentication = () => {
    const { actions } = useContext(AppContext)

    useEffect(() => {
        (async function () {
            await identifo.handleAuthentication();
            const status = await identifo.getAuthenticated();
            actions.setIsAuth(status);
        })()
    }, [actions]);
}