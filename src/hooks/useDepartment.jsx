import React from 'react'

const useDepartment = () => {
    const createDepartment = async (name, facultyId, code) => {
        try {
            const url = `${baseUrl}/department/create`;
            const res = await axios.post(url, { name, facultyId, code })
            return res;
        }
        catch (err) {
            throw new Error(err)
        }
    }

    const updateDependent = async (
        
    ) => { }

    const deleteDependent = async () => { }

    const getDependent = async () => { }

    return {

    }
}

export default useDepartment