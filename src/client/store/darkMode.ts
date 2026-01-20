import { create } from "zustand";
import { persist } from "zustand/middleware";

type DarkModeStore = {
	mode: "light" | "dark";
	setMode: (newMode: "light" | "dark") => void;
};

export const useDarkModeStore = create<DarkModeStore>()(
	persist(
		(set) => ({
			mode: "dark",
			setMode: (newMode: "light" | "dark") => {
				set({ mode: newMode });
			},
		}),
		{
			name: "dark-mode-storage",
		},
	),
);
