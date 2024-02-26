
import { createStore } from 'framework7/lite';
import {f7} from 'framework7-react'
import { getMe as getMeAPI, getReceptionDays as getReceptionDaysAPI} from '../api/api';

const store = createStore({
  state: {
    receptionDays: [],
    isLoading: false,
    me: null,
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
    addReceptionDays({ state }) {
      state.receptionDays = [...state.receptionDays];
    },
    setLoading({state}, payload) {
      state.isLoading = payload
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
