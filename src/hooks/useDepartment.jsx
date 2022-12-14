import React from 'react'
import { userAtom, userTokenAtom } from '../../recoilStates';

const useDepartment = () => {
    const userToken = useRecoilValue(userTokenAtom)

    /**
     * 
     * @param {*} name 
     * @param {*} faculty 
     * @param {*} code 
     * @returns 
     */
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

    /**
     * 
     * @param {string} name 
     * @param {number} faculty 
     * @param {string} code 
     * @param {number} id 
     * @returns 
     */
    const updateDepartment = async (name, faculty, code, id) => {
        try {
            const url = `${baseUrl}/department/update/${id}`;
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

    /**
     * 
     * @param {*} id 
     * @returns 
     */
    const deleteDepartment = async (id) => {
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

    /**
     * @param {*} facultyId 
     * @returns 
     */
    const getDepartment = async (facultyId) => { 
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
        updateDepartment,
        deleteDepartment,
        getDepartment
    }
}

export default useDepartment