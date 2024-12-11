export const apiRequest = async (instance, method, endpoint, params) => {
    method = method.toLowerCase()
    const isGet = method === 'get'

    const response = isGet
        ? await instance.get(endpoint, { params })
        : await instance[method](endpoint, params)

    return response
}
