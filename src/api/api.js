import { fetchData } from "./fetch"

export const getMe = () => {
    return fetchData({path: '/get-me'})
}

export const getDoctor = () => {
    return fetchData({path: '/doctor'})
}

export const getReceptionDays = () => {
    return fetchData({path: '/reception-days'})
}

export const login = (login, password) => {
    return  fetchData({path: '/login', method: 'POST', body: { login, password }})
}

export const getPatient = () => {
    return fetchData({path: '/patient'})
}

export const appointmentPatient = (receptionDayId) => {
    return fetchData({path: '/appointment-patient', method: 'POST', body: { receptionDayId }})
}
