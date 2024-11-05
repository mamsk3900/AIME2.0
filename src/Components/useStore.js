import {create} from 'zustand';

const useStore = create((set) => ({
  color: 'blue', // Initial color state
  toggleColor: () =>
    set((state) => ({ color: state.color === 'blue' ? 'orange' : 'blue' })),
}));

export default useStore;
