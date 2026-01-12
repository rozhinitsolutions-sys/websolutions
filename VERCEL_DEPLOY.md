# Инструкция по деплою на Vercel

## Автоматическое определение Vite

Проект настроен для автоматического определения **Framework Preset = Vite** в Vercel.

### Что уже настроено:

1. ✅ `package.json` с правильными scripts (`dev`, `build`, `preview`)
2. ✅ `vite.config.ts` с конфигурацией для production build
3. ✅ `vercel.json` с указанием `rootDirectory: "rozti-solution"`
4. ✅ Зависимость `vite` в `package.json`

### Настройки в Vercel Dashboard:

1. **Root Directory**: `rozti-solution` (уже указано в `vercel.json`)
2. **Framework Preset**: Vite (должен определиться автоматически)
3. **Build Command**: `npm run build` (или оставить пустым для автоопределения)
4. **Output Directory**: `dist` (уже указано в `vercel.json`)
5. **Install Command**: `npm install` (или оставить пустым)

### Если Framework Preset не определился автоматически:

1. Перейдите в **Settings → General → Framework Preset**
2. Выберите **Vite** вручную
3. Убедитесь, что **Root Directory** = `rozti-solution`

### Переменные окружения (опционально):

Если используете `GEMINI_API_KEY`, добавьте в **Settings → Environment Variables**:
- `GEMINI_API_KEY` = ваш ключ

---

**Примечание**: После изменений в `vercel.json` или `package.json` Vercel автоматически пересоберет проект.
