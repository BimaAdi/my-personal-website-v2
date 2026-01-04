import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "@/components/shared/I8n";

// TODO: internationalization make page blink on load, try change to cookie + SSR

type I8nStore = {
	lang: Lang;
	setLang: (newLang: Lang) => void;
};

export const useI8nStore = create<I8nStore>()(
	persist(
		(set) => ({
			lang: "en",
			setLang: (newLang: Lang) => {
				set({ lang: newLang });
			},
		}),
		{
			name: "i8n-storage", // name of the item in the storage
		},
	),
);
