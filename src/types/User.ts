import { DocumentReference } from "firebase/firestore";

export interface User {
    uid: string;
    fullName: string;
    nickName: string;
    email: string;
    avatar: string;
    followers: DocumentReference[];
    followersCount: number;
    following: DocumentReference[];
    followingCount: number;
}