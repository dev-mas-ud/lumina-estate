import { useEffect } from "react";

export function useRouteChangeHandler(router, setLoading, setError) {
	useEffect(() => {
		const handleStart = () => {
			setError(null);
			setLoading(true);
		};

		const handleComplete = () => {
			setLoading(false);
		};

		const handleError = () => {
			setLoading(false);
			setError("An error occurred while changing route...");
		};

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleError);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleError);
		};
	}, [router, setLoading, setError]);
}
