import { api_axios as axios } from '@/lib/axios'

const fetchPaginatedData = async (
    endpoint,
    page = 1,
    perPage = 10,
    additionalParams,
) => {
    try {
        const params = { page, perPage, ...additionalParams }
        const response = await axios.get(endpoint, { params })
        const { data, meta, links } = response.data
        return { data, meta, links }
    } catch (error) {
        console.error('Error fetching paginated data:', error)
        throw error
    }
}

export default fetchPaginatedData

export const fetchData = async endpoint => {
    try {
        const response = await axios.get(endpoint)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export const postData = async (endpoint, params) => {
    try {
        const response = await axios.post(endpoint, params)
        return response
    } catch (error) {
        console.error('Error posting data:', error)
        throw error
    }
}

export const deleteData = async (endpoint) => {
    try {
        const response = await axios.delete(endpoint)
        return response
    } catch (error) {
        console.error('Error deleting data:', error)
        throw error
    }
}
