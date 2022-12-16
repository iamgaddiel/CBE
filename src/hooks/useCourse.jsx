import axios from 'axios';
import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom, userTokenAtom } from '../../recoilStates';

const useCourse = () => {
    const [baseUrl, _] = useState(process.env.BASE_URL)
    // const authUser = useRecoilValue(userAtom)x
    const userToken = useRecoilValue(userTokenAtom)


    /**
     * @param title 
     * @param code 
     * @param creditUnit 
     * @returns 
     */
    const createCourse = async (title, code, creditUnit) => {
        try {
            const url = `${baseUrl}/course/create`;
            const { data } = await axios.post(
                url, {
                data: {
                    title,
                    code,
                    creditUnit
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
     * @param {number} course 
     * @param {string} userId 
     */
    const attachCoordinator = async (course, userId) => {
        try {
            const url = `${baseUrl}/course/attach-coordinator`;
            const { data } = await axios.post(
                url,
                {
                    data: {
                        course,
                        userId
                    },
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                }
            )
            return data;
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }


    /**
     * 
     * @param {number} course 
     * @param {string} userId 
     */
    const detachCoordinator = async (course, userId) => {
        try {
            const url = `${baseUrl}/course/detach-coordinator`;
            const { data } = await axios.post(
                url,
                {
                    data: {
                        course,
                        userId
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
     * @param {*} title 
     * @param {*} code 
     * @param {*} creditUnit 
     * @param {*} courseId 
     * @returns 
     */
    const updateCourse = async (title, code, creditUnit, courseId) => {
        try {
            const url = `${baseUrl}/course/update/${courseId}`;
            const res = await axios.put(
                url,
                {
                    data: {
                        title,
                        code,
                        creditUnit
                    },
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                })
            return res;
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }

    /**
     * 
     * @param {*} courseId 
     * @returns 
     */
    const deleteCourse = async (courseId) => {
        try {
            const url = `${baseUrl}/course/update/${courseId}`;
            const { data } = await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            return data;
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }

    /**
     * 
     * @param {*} pageNumber 
     * @param {*} size 
     * @returns 
     */
    const getCourse = async (pageNumber, size) => {
        try {
            const url = `${baseUrl}/course/all?page=${pageNumber}&size=${size}`;
            const { data } = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            return data
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }


    /**
     * @param {*} userId 
     * @returns 
     */
    const getCoordinatorCourse = async (userId) => {
        try {
            const url = `${baseUrl}/course/for-coordinator=${userId}`;
            const { data } = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            return data
        }
        catch (err) {
            throw new Error(err.response.data)
        }
    }


    return {
        createCourse,
        attachCoordinator,
        detachCoordinator,
        updateCourse,
        deleteCourse,
        getCoordinatorCourse,
        getCourse,
    }
}

export default useCourse