/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      '.rdrDefinedRangesWrapper': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 -5px',
      },
      '.rdrDefinedRangesWrapper .rdrButton': {
        padding: '5px',
      },
      borderRadius: {
        'hq-rounded': '20px',
      },
      colors: {
        'deep-sea-blue': {
          // official palette was extended with https://palettte.app/
          DEFAULT: '#102747',
          900: '#102747', // 100%
          800: '#2B3C58',
          700: '#45526A', // 80%
          600: '#5D687D',
          500: '#737D8F', // 60%
          400: '#8B94A3',
          300: '#A2A9B5', // 40%
          200: '#BAC0C8',
          100: '#D0D4DA', // 20%
          50: '#E7EAEE',
        },
        'cedar-orange': {
          // official palette was extended with https://palettte.app/
          900: '#8A3B1C',
          800: '#A24B29',
          DEFAULT: '#BE623E',
          700: '#BE623E', // 100%
          600: '#C37555',
          500: '#C2866C', // 80%
          400: '#D1A491', // 60%
          300: '#E0C2B4', // 40%
          200: '#EFE0D9', // 20%
          100: '#FAF3F0',
          50: '#FEFBFA',
        },
        'bluish-gray': {
          DEFAULT: '#5E7386',
          900: '#F9F9F9',
        },
        mustard: '#DABA4A',
        'steel-blue': '#4676B6',
        'quick-silver': '#A9A2A0',
        platinum: '#E5E4E2',
        'white-sand': '#F4F4F4',
        black: '#12181A',
      },
    },
  },
  important: true,
  plugins: [require('@tailwindcss/forms')],
};
