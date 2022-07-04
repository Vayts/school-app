import { useEffect } from 'react';

export function useOutsideClick(ref, func) {
	useEffect(() => {
		function handleClick(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				func();
			}
		}
		
		document.addEventListener('mousedown', handleClick);
		
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [ref]);
}
