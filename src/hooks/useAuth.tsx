import { createSignal } from "solid-js";
import { AuthType, authenticate } from "../api/auth";
import { AuthForm } from "../types/Form";
import { FirebaseError } from "firebase/app";
import { useUIDispatch } from "../context/ui";

const useAuth = (authType: AuthType) => {
    const [loading, setLoading] = createSignal(false);
    const { addSnackbar } = useUIDispatch();

    const authUser = async (form: AuthForm) => {
        setLoading(true);
        try {
            await authenticate(form, authType);
            addSnackbar({
                message: 'Hello',
                type: 'success'
            });
        } catch(error) {
            const message = (error as FirebaseError).message;
            addSnackbar({
                message: 'Something went wrong',
                type: 'error'
            });
        } finally {
            setLoading(false);
        }
        const firebaseUser = await authenticate(form, authType);
        return firebaseUser;
    }

    return {
        authUser,
        loading
    }

}

export default useAuth;