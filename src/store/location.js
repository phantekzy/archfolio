/* Import section */
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants";

/* Default location */
const DEFAULT_LOCATION = locations.about;

/* Location store */
export const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);
