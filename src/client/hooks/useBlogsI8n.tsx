import { useEffect, useMemo } from "react";
import { allLang, defaultLang, type Lang } from "../components/shared/I8n";
import { useI8nStore } from "../store/i8n";

export default function useBlogsI8n(lang: string | undefined) {
	const setLang = useI8nStore((state) => state.setLang);

	const selectedLang = useMemo(() => {
		return !!lang && allLang.includes(lang) ? lang : defaultLang;
	}, [lang]) as Lang;

	useEffect(() => {
		setLang(selectedLang);
	}, [selectedLang, setLang]);

	return { selectedLang };
}
