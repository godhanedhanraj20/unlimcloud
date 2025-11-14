import { create } from 'zustand';

interface AppState {
  isDonationVisible: boolean;
  toggleDonationVisibility: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isDonationVisible: false,
  toggleDonationVisibility: () => set((state) => ({ isDonationVisible: !state.isDonationVisible })),
}));
