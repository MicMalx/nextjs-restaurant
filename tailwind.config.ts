import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'golden-500': '#f2c666',
                'golden-600': '#c59938',
                'golden-700': '#b47c03',
                'golden-800': '#aa6817',
            },
            minHeight: { content: 'calc(100vh - 394px)' },
        },
    },
    plugins: [],
};
export default config;
