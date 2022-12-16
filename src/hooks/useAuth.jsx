import React, { useState } from 'react'

import axios from 'axios'
import { useRecoilState } from 'recoil'

import { userAtom, userTokenAtom } from '../recoilStates'


const useAuth = () => {
    const [baseUrl, _] = useState(process.env.BASE_URL)
    const [authUser, setAuthUser] = useRecoilState(userAtom)
    const [userToken, setUserToken] = useRecoilState(userTokenAtom)
    const [token, setToken] = useState("")


    /**
     * @param username 
     * @param password 
     * @returns 
     */
    const login = async (username, password) => {
        try {
            const url = `${baseUrl}/auth/login`
            const { data } = await axios.post(url, { username, password });
            setUserToken(res.data.jwt)
            setToken(res.data.jwt)
            return data;
        }
        catch (err) {
            throw new Error(err)
        }
    }

    const getUser = async () => {
        try {
            const url = `${baseUrl}/current-user`
            const { data } = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setAuthUser(data);
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }


    return {
        login,
        getUser,
        authUser
    }
}

export default useAuth