import { useCallback, useEffect, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const debounceCallback = useCallback(
		(...args: any[]) => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

			timerRef.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);

	useEffect(() => {
		return () => {
			clearTimeout(timerRef.current);
		};
	}, []);

	return debounceCallback;
}

// Если с момента последнего вызова не прошла нужная задержка,
// то таймер обновится, и только, если, задержка вновь не прервётся, тогда вызываем функцию

// Дебаунсинг делает отсрочку, а троттлинг игнорирует.
