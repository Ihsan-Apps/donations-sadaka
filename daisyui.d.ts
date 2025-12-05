import 'tailwindcss';

declare module 'tailwindcss' {
	interface UserConfig {
		daisyui?: {
			themes?: Array<string | Record<string, any>>;
			darkTheme?: string;
		};
	}
}
