import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { useLocalStorage } from './useLocalStorage';

export interface User {
    email: string,
    id: string,
    firstname: string,
    lastname: string,
    role: string,
    walletAddress: string,
    authToken?: string;
}

export const useUser = () => {
    const [ user, setUser ] = useState<User | null>(null);
    const { setItem } = useLocalStorage();

    const addUser = (user: User) => {
        setUser(user);
        setItem('user', JSON.stringify(user));
    };

    const removeUser = () => {
        setUser(null);
        setItem('user', '');
    };

    return { user, addUser, removeUser, setUser };
};