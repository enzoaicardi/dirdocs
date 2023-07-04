import { defineConfig } from 'unocss'
import { presetPruno } from '@enzoaicardi/preset-pruno'

export default defineConfig({
    cli: {
        entry: {
            patterns: ['dist/**/*.js', 'dist/*.html', 'dist/*.js'],
            outFile: 'dist/assets/css/uno.css'
        }
    },
    presets: [presetPruno()]
})