import { useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
	const throttleRef = useRef(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const throttleCallback = useCallback(
		(...args: any[]) => {
			if (!throttleRef.current) {
				callback(...args);
				throttleRef.current = true;

				timerRef.current = setTimeout(() => {
					throttleRef.current = false;
				}, delay);
			}
		},
		[callback, delay]
	);

	useEffect(() => {
		return () => {
			clearTimeout(timerRef.current);
		};
	}, []);

	return throttleCallback;
}

// Если с моомента последнего вызова не прошла нужная задержка,
// то вызов проигнорируется
