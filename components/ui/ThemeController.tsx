'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { THEMES } from '../../lib/providers';

export default function ThemeController() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// eslint-disable-next-line react-hooks/set-state-in-effect
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<div className='join join-vertical'>
			{THEMES.map((t) => (
				<input
					key={t}
					type='radio'
					name='theme-buttons'
					className='btn theme-controller join-item'
					aria-label={t}
					value={t}
					checked={theme === t}
					onChange={() => setTheme(t)}
				/>
			))}
		</div>
	);
}
