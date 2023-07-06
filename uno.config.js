import { defineConfig } from 'unocss'
import { presetPruno } from '@enzoaicardi/preset-pruno'

export default defineConfig({
    cli: {
        entry: {
            patterns: ['dist/**/*.js', 'dist/*.html', 'dist/*.js'],
            outFile: 'dist/assets/css/uno.css'
        }
    },
    theme: {
        colors: {
            'primary': 'hsl(var(--color-primary))',
            'primary-contrast': 'hsl(var(--color-primary-contrast))',
            'text': 'hsl(var(--color-text))',
            'text-contrast': 'hsl(var(--color-text-contrast))',
            'text-highlight': 'hsl(var(--color-text-highlight))',
            'backdrop': 'hsl(var(--color-backdrop))',
            'background': 'hsl(var(--color-background))',
            'background-contrast': 'hsl(var(--color-background-contrast))',
            'gray': 'hsl(var(--color-gray))',
            'gray-contrast': 'hsl(var(--color-gray-contrast))'
        },
    },
    shortcuts: {
        'w-sidebar': 'w-240'
    },
    presets: [presetPruno()]
})