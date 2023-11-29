import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
    daisyui: {
        themes: [
            {
                'bumblebee': {
                    'primary' : '#f9d72f',
                    'primary-focus' : '#e9c307',
                    'primary-content' : '#25282c',

                    'secondary' : '#dfa62a',
                    'secondary-focus' : '#be8b1e',
                    'secondary-content' : '#ffffff',

                    'accent' : '#25282c',
                    'accent-focus' : '#25282c',
                    'accent-content' : '#ffffff',

                    'neutral' : '#25282c',
                    'neutral-focus' : '#25282c',
                    'neutral-content' : '#ffffff',

                    'base-100' : '#25282c',
                    'base-200' : '#2a2e37',
                    'base-300' : '#16181d',
                    'base-content' : '#ebecf0',

                    'info' : '#1c92f2',
                    'success' : '#009485',
                    'warning' : '#ff9900',
                    'error' : '#ff4141',

                    '--rounded-box': '0',
                    '--rounded-btn': '0',
                    '--rounded-badge': '0',

                    '--animation-btn': '.25s',
                    '--animation-input': '.2s',

                    '--btn-text-case': 'uppercase',
                    '--navbar-padding': '.5rem',
                    '--border-btn': '1px',
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}
export default config
