import React from 'react'

const useGrade = () => {
    const [baseUrl, _] = useState(process.env.BASE_URL)
    const userToken = useRecoilValue(userTokenAtom)


    /**
     * 
     * @param {string} title 
     * @param {number} gradeOrder 
     * @param {number} gradeLimit 
     * @param {number} creditValue 
     * @param {number} gradingSystem 
     * @returns 
     */
    const createGrade = async (title, gradeOrder, gradeLimit, creditValue, gradingSystem) => {
        try {
            const url = `${baseUrl}/grade/create`;
            const { data } = await axios.post(
                url,
                {
                    data: {
                        title,
                        gradeOrder,
                        gradeLimit,
                        creditValue,
                        gradingSystem
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
     * @param {number} gradingSystem 
     * @returns 
     */
    const getGrade = async (gradingSystem) => {
        try {
            const url = `${baseUrl}/grade/all?grading_system=${gradingSystem}`;
            const { data } = await axios.get(
                url,
                {
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
        getGrade,
        createGrade
    }
}

export default useGrade