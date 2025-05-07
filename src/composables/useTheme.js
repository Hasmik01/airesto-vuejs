import { ref, watchEffect, onMounted } from 'vue'

const theme = ref( 'dark')

export function useTheme() {
    const setTheme = (value) => {
        theme.value = value
        document.documentElement.classList.toggle('dark', value === 'dark')
    }

    onMounted(() => {
        setTheme(theme.value) // apply on load
    })

    watchEffect(() => {
        setTheme(theme.value)
    })

    return {
        theme,
        toggleTheme: () => {
            setTheme(theme.value === 'dark' ? 'light' : 'dark')
        }
    }
}
