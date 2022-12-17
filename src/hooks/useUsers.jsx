import React from 'react'
import { userAtom, userTokenAtom } from '../../recoilStates';


const useUsers = () => {
    const userToken = useRecoilValue(userTokenAtom)

    /**
     * 
     * @param {string} name 
     * @param {string} phone 
     * @param {string} email 
     * @param {string} userId 
     * @returns 
     */
    const createUser = async (name, phone, email, userId) => {
        try {
            const url = `${baseUrl}/users/create-coordinator`;
            const { data } = await axios.post(
                url,
                {
                    data: {
                        name,
                        phone,
                        email,
                        userId
                    },
                    headers: {
                        "Authorization": `Bearer ${userToken}`,
                    }
                })
            return data;
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }


    /**
     * 
     * @param {string} name 
     * @param {string} phone 
     * @param {string} email 
     * @param {string} userId 
     * @param {number} userId 
     * @returns 
     */
    const updateUser = async (name, phone, email, userId, id) => {
        try {
            const url = `${baseUrl}/users/update-coordinator/${id}`;
            const { data } = await axios.put(
                url,
                {
                    data: {
                        name,
                        phone,
                        email,
                        userId
                    },
                    headers: {
                        "Authorization": `Bearer ${userToken}`,
                    }
                })
            return data;
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }


    /**
     * 
     * @param {number} page 
     * @param {number} size 
     * @returns 
     */
    const getUser = async (page, size) => {
        try {
            const url = `${baseUrl}users/all?page=${imageId}&size=${imageId}`;
            const { data } = await axios.get(
                url,
                {
                    headers: {
                        "Authorization": `Bearer ${userToken}`,
                    }
                })
            return data;
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }

    return {
        getUser,
        createUser,
        updateUser
    }
}

export default useUsers