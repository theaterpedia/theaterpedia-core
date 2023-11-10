import type { Level, Key, ThemePalette, ColorPalette } from '../types'

const paletteToStyle = (level: Level, palette: ColorPalette) => {
    if (palette) {
        return Object.keys(palette)
            .map((key) => {
                return `--${level}-${key}: ${palette[key as Key]}`
            })
            .join(`;\r\n`)
    }
}

const individualPalette = (themePalette: ThemePalette) => {
    if (themePalette) {
        return Object.entries(themePalette).map(([key, value]) => {
            return paletteToStyle(key as Level, value)
        })
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const colors = useAppConfig()?.theme?.colors
    const style = individualPalette(colors)
    if (style) {
        useHead({
            style: [
                {
                    children: `:root, body { ${style}}`
                }
            ]
        })
    }
})