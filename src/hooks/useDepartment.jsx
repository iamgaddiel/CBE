import React from 'react'
import { userAtom, userTokenAtom } from '../../recoilStates';

const useDepartment = () => {
    const userToken = useRecoilValue(userTokenAtom)


    const createDepartment = async (name, faculty, code) => {
        try {
            const url = `${baseUrl}/department/create`;
            const { data } = await axios.post(url, {
                data: {
                    name,
                    faculty,
                    code
                },
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            return data;
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }

    const updateDependent = async (name, faculty, code) => {
        try {
            const url = `${baseUrl}/department/create`;
            const { data } = await axios.put(url, {
                data: {
                    name,
                    faculty,
                    code
                },
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            return data;
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }

    const deleteDependent = async (id) => {
        try {
            const url = `${baseUrl}/department/delete/${id}`;
            const { data } = await axios.put(url, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            return data;
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }

    const getDependent = async (facultyId) => { 
        try {
            const url = `${baseUrl}/department/all?faculty=${facultyId}`;
            const { data } = await axios.put(url, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            return data;
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }

    return {
        createDepartment,
        updateDependent,
        deleteDependent,
        getDependent
    }
}

export default useDepartment