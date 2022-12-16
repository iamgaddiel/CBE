import React from 'react'
import fs from 'fs'

const useQuestions = () => {
    const [baseUrl, _] = useState(process.env.BASE_URL)
    const userToken = useRecoilValue(userTokenAtom)



    /**
     * 
     * @param {*} text 
     * @param {*} course 
     * @param {*} file 
     * @returns data
     */
    const createQuestion = async (text, course, file) => {
        let form = new FormData();
        form.append("text", text)
        form.append("course", course)
        form.append("file", fs.createReadStream(file))

        try {
            const url = `${baseUrl}/question/create`;
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
     * @param {*} text 
     * @param {*} course 
     * @returns 
     */
    const updateQuestion = async (text, course, questionId) => {
        let form = new FormData();
        form.append("text", text);
        form.append("course", course);

        try {
            const url = `${baseUrl}/question/update/${questionId}`;
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
    const getAllQuestions = async (size, course, page) => {
        try {
            const url = `${baseUrl}/question/all?page=${page}&size=${size}&course=${course}`;
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
            const url = `${baseUrl}/question/image/${imageId}`;
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


    const uploadQuestion = async () => {
        try {
            const url = `${baseUrl}/question/upload`;
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
     * @param {number} questionId 
     * @returns 
     */
    const deleteQuestion = async (questionId) => {
        try {
            const url = `${baseUrl}/question/delete/${questionId}`;
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
        createQuestion,
        updateQuestion,
        getAllQuestions,
        uploadQuestion,
        deleteQuestion
    }
}

export default useQuestions