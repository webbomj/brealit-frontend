import { fetchData } from "./fetch"

export const getMe = () => {
    return fetchData({path: '/get-me'})
}

export const getReceptionDays = () => {
    return fetchData({path: '/reception-days'})
}

export const login = (login, password) => {
    return fetchData({path: '/login', method: 'POST', body: { login, password }})
}

export const getPatient = (pacientId) => {
    return fetchData({path: '/patient', method: 'POST', body: { pacientId }})
}

export const appointmentPatient = (pacientId, receptionDayId) => {
    return fetchData({path: '/appointment-patient', method: 'POST', body: { pacientId, receptionDayId }})
}
