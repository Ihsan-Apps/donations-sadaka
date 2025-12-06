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
		<div className='dropdown'>
			<div tabIndex={0} role='button' className='btn m-1 flex items-center justify-between'>
				{theme}
				<svg width='12px' height='12px' className='inline-block h-2 w-2 fill-current opacity-60' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2048 2048'>
					<path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z' />
				</svg>
			</div>

			<ul tabIndex={-1} className='dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl'>
				{THEMES.map((t) => (
					<li key={t}>
						<input
							type='radio'
							name='theme-dropdown'
							className='theme-controller w-full btn btn-sm btn-block  justify-start'
							aria-label={t}
							value={t}
							checked={theme === t}
							onChange={() => setTheme(t)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
