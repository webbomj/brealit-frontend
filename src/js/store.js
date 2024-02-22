
import { createStore } from 'framework7/lite';
import {f7} from 'framework7-react'

const store = createStore({
  state: {
    receptionDays: [],
    isLoading: false
  },
  getters: {
    receptionDays({ state }) {
      return state.receptionDays;
    },
    isLoading({state}) {
      return state.isLoading
    }
  },
  actions: {
    async getReceptionDays({state}) {
      f7.store.dispatch('setLoading', true);
      const rawData = await fetch('http://localhost:3000/reception-days')
      const days = await rawData.json()
      state.receptionDays = [...days]
      f7.store.dispatch('setLoading', false);
    },
    addReceptionDays({ state }) {
      state.receptionDays = [...state.receptionDays];
    },
    setLoading({state}, load) {
      state.isLoading = load
    }
  },
})
export default store;
