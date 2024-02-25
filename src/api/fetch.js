import Cookies from 'js-cookie'

export const tokenPath = 'token'


export const fetchData = async ({path, method = 'GET', body = {}, headers = {}}) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL
        const isToken = Cookies.get(tokenPath)

        const result = await fetch(`${BASE_URL}${path}`, {
            method: method,
            ...(method === 'GET' ? {} : {body: JSON.stringify(body)}),
            headers: {
                "Content-type": 'application/json',
                ...(isToken ? {"Authorization": `Bearer ${isToken}`} : {}),
                ...headers
            }
        })
        return result
    
}