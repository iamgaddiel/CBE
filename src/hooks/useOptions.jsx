import React, { useState } from 'react'
import fs from 'fs'
import axios from 'axios'
import { useRecoilValue } from 'recoil'
import { userTokenAtom } from '../recoilStates'

const useOptions = () => {
    const [baseUrl, _] = useState(process.env.BASE_URL)
    const userToken = useRecoilValue(userTokenAtom)


    /**
     * 
     * @param {*} text 
     * @param {*} correct 
     * @param {*} file 
     * @param {*} question 
     * @returns 
     */
    const createOption = async (text, correct, file, question) => {
        let form = new FormData();
        form.append("text", text)
        form.append("correct", correct)
        form.append("question", question)
        form.append("file", fs.createReadStream(file))

        try {
            const url = `${baseUrl}/option/create`;
            const { data } = await axios.post(
                url,
                {
                    data: form,
                    headers: {
                        "Authorization": `Bearer ${userToken}`,
                        ...form.getHeaders()
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
     * @param text 
     * @param correct 
     * @param file 
     * @param question 
     * @param optionId 
     * @returns 
     */
    const updateOption = async (text, correct, file, question, optionId) => {
        let form = new FormData();
        form.append("text", text)
        form.append("correct", correct)
        form.append("question", question)
        form.append("file", fs.createReadStream(file))
        try {
            const url = `${baseUrl}/option/update/${optionId}`;
            const { data } = await axios.put(
                url,
                {
                    data: form,
                    headers: {
                        "Authorization": `Bearer ${userToken}`,
                        ...form.getHeaders()
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
     * @param {number} size 
     * @param {number} course 
     * @param {number} page 
     */
    const getAllOptions = async (questionId) => {
        try {
            const url = `${baseUrl}/option/all?question=${questionId}`;
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

    /**
     * 
     * @param {number} imageId 
     */
    const getImage = async (imageId) => {
        try {
            const url = `${baseUrl}/52/image/${imageId}`;
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
        getImage,
        getAllOptions,
        updateOption,
        createOption
    }
}

export default useOptions