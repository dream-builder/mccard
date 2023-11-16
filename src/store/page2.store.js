import {create} from 'zustand'
import _data from '../data/store.json';

const usePage2Store = create((set) => ({
    data: _data.page2,
    complete: false,
    setData: (name, value) => set((state) => {
        return {...state, data: {...state.data, [name]: value}}
    })
}));

export default usePage2Store;