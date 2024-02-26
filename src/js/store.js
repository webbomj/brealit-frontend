
import { createStore } from 'framework7/lite';
import {f7} from 'framework7-react'
import { appointmentPatient, getDoctor, getMe as getMeAPI, getPatient, getReceptionDays as getReceptionDaysAPI} from '../api/api';

const store = createStore({
  state: {
    receptionDays: [],
    isLoading: false,
    me: null,
    doctor: null,
    appointmentDays: []
  },
  getters: {
    receptionDays({ state }) {
      return state.receptionDays;
    },
    loading({state}) {
      return state.isLoading
    },
    me({state}) {
      return state.me
    },
    doctor({state}) {
      return state.doctor
    },
    appointmentDays({state}) {
      return state.appointmentDays
    }
  },
  actions: {
    async getReceptionDays({state}, payload) {
      if (payload) {
        state.receptionDays = payload
        return
      }
      f7.store.dispatch('setLoading', true);
      const rawData = await getReceptionDaysAPI()
      const days = await rawData.json()
      state.receptionDays = [...days]
      f7.store.dispatch('setLoading', false);
    },
    async getAppointmentDays({state}) {
      f7.store.dispatch('setLoading', true);
      const rawData = await getPatient()
      const patient = await rawData.json()
      state.appointmentDays = [...patient.patienReceptionDay]
      f7.store.dispatch('setLoading', false);
    },
    addReceptionDays({ state }) {
      state.receptionDays = [...state.receptionDays];
    },
    setLoading({state}, payload) {
      state.isLoading = payload
    },
    async setDoctor({state}) {
      try {
        f7.store.dispatch('setLoading', true);
        const rawData = await getDoctor()
        const doctor = await rawData.json()
        state.doctor = doctor
        f7.store.dispatch('setLoading', false);
      }catch(e){
        state.doctor = null
        f7.store.dispatch('setLoading', false);
      }
    },
    async setMe({state}, payload) {
      try {
        if (payload) {
          state.me = payload
          return
        }
        f7.store.dispatch('setLoading', true);
        const rawData = await getMeAPI()
        const me = await rawData.json()
        state.me = me.me
        f7.store.dispatch('setLoading', false);
      }
      catch(e) {
        state.me = null
        f7.store.dispatch('setLoading', false);
      }
      
    }
  },
})
export default store;
