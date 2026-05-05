import { onMounted, onUnmounted, ref, watchEffect } from 'vue'

const STORAGE_KEY = 'app-theme'

const useDarkTheme = () => {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const stored = localStorage.getItem(STORAGE_KEY)
  const isDark = ref(stored ? stored === 'dark' : media.matches)

  watchEffect(() => {
    document.documentElement.classList.toggle('dark', isDark.value)
  })

  const onSystemChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem(STORAGE_KEY)) isDark.value = e.matches
  }

  onMounted(() => media.addEventListener('change', onSystemChange))
  onUnmounted(() => media.removeEventListener('change', onSystemChange))

  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
  }

  return { isDark, toggleTheme }
}

export default useDarkTheme
