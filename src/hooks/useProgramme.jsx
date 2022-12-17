import React from 'react'
import { userAtom, userTokenAtom } from '../../recoilStates';

const useProgramme = () => {
    const userToken = useRecoilValue(userTokenAtom)

    /**
     * 
     * @param {string} name 
     * @param {number} department 
     * @returns 
     */
    const createProgramme = async (name, department) => {
        try {
            const url = `${baseUrl}/programme/create`;
            const { data } = await axios.post(url, {
                data: {
                    name,
                    department
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
     * @param {number} department 
     * @param {number} id

     * @returns 
     */
    const updateDepartment = async (name, department, id) => {
        try {
            const url = `${baseUrl}/${baseUrl}/update/${id}`;
            const { data } = await axios.put(url, {
                data: {
                    name,
                    department
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
     * @param {number} programme 
     * @returns 
     */
    const deleteProgramme = async (c) => {
        try {
            const url = `${baseUrl}/programme/delete/${id}`;
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
     * @param {number} departmentId 
     * @returns 
     */
    const getProgramme = async (departmentId) => {
        try {
            const url = `${baseUrl}/department/all?faculty=${departmentId}`;
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

    }
}

export default useProgramme