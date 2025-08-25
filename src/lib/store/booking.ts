import { create } from "zustand";

type BookingData = {
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  comments: string;
  service: string;
  date: string;
  time: string;
};

type BookingState = {
  step: number;
  data: Partial<BookingData>;
  setStep: (step: number) => void;
  updateData: (values: Partial<BookingData>) => void;
  reset: () => void;
};

export const useBookingStore = create<BookingState>(set => ({
  step: 0,
  data: {},
  setStep: step => set({ step }),
  updateData: values => set(state => ({ data: { ...state.data, ...values } })),
  reset: () => set({ step: 0, data: {} }),
}));
