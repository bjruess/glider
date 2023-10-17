import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthForm, RegisterForm } from "../types/Form";
import { db, firebaseAuth } from "../db";
import { User } from "../types/User";
import { setDoc, doc, getDoc } from "firebase/firestore";

export type AuthType = 'register' | 'login';

const register = async (form: RegisterForm) => {
    const { user: registeredUser } = await createUserWithEmailAndPassword(firebaseAuth, form.email, form.password);
    
    const user: User = {
        uid: registeredUser.uid,
        fullName: form.fullName,
        nickName: form.nickName,
        email: form.email,
        avatar: form.avatar,
        followers: [],
        followersCount: 0,
        following: [],
        followingCount: 0        
    }

    setDoc(doc(db, 'users', registeredUser.uid), user);

    return registeredUser;
}

const logout = () => {
    return signOut(firebaseAuth);    
}

const authenticate = (form: AuthForm, type: AuthType) => {
    return type === 'login' ? login(form) : register(form as RegisterForm);
}

const login = async (loginForm: AuthForm) => {
    const  { user } = await signInWithEmailAndPassword(firebaseAuth, loginForm.email, loginForm.password);
    return user;
}

const getUser = async (uid: string) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as User;
}

export { 
    register,
    logout,
    login,
    authenticate,
    getUser
};