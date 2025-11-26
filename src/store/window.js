/* Import section */
import { create } from "zustand";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants";
import { immer } from "zustand/middleware/immer";

/* Window store section */
export const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    focusedWindow: null,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
        state.focusedWindow = windowKey;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
        if (state.focusedWindow === windowKey) state.focusedWindow = null;
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
        state.focusedWindow = windowKey;
      }),
  })),
);
