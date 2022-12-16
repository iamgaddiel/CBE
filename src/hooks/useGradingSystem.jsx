import React from 'react'

const useGradingSystem = () => {
    const [baseUrl, _] = useState(process.env.BASE_URL)

    /**
     * 
     * @param {string} title 
     * @param {number} passMark 
     * @returns data
     */
    const createGradingSystem = async (title, passMark) => {
        try {
            const url = `${baseUrl}/grading-system/create`;
            const { data } = await axios.post(
                url,
                {
                    data: {
                        title,
                        passMark
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
     * @returns data 
     */
    const getGradingSystem = async () => {
        try {
            const url = `${baseUrl}/grading-system/all`;
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
        createGradingSystem,
        getGradingSystem
    }
}

export default useGradingSystem