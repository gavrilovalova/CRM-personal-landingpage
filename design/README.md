# Материалы для разработки лендинга в Claude Code

## Как запустить

1. Создай пустую папку проекта и распакуй туда этот архив (папка `crm-landing-handoff/` целиком).
2. Перенеси `crm-landing-handoff/CLAUDE.md` в корень проекта. Claude Code читает его автоматически.
3. Открой Claude Code в корне проекта и вставь промпт ниже.

## Промпт для Claude Code

```
Сверстай лендинг по материалам из папки crm-landing-handoff/.
Бриф, стек и критерии готовности описаны в CLAUDE.md, весь текст лежит в design/content.md,
токены — в design/design-system.md и design/global.css, раскладка блоков — в design/sections.md.
Визуальный эталон: reference/mobile.html (390px), reference/desktop.html (1440px)
и скриншоты в screenshots/.

Стек: Astro (static) + Tailwind CSS 4 через @tailwindcss/vite, без клиентского JS.

Порядок работы:
1. Инициализируй Astro-проект в текущей папке, добавь Tailwind 4, подключи Onest,
   скопируй design/global.css в src/styles/global.css.
2. Вынеси весь текст в src/content/landing.ts.
3. Сделай UI-компоненты (Button, Chip, Icon, ContactCard), затем 9 секций по порядку.
4. Сверь результат со скриншотами на 390 и 1440 px, проверь 320, 768 и 1024 px.
5. Запусти npm run build и пройди чек-лист «Готово, когда» из CLAUDE.md.

Ссылки на приложение бери из PUBLIC_APP_URL. Открытые вопросы оставь заглушками.
```

## Что в архиве

```
CLAUDE.md                 бриф для Claude Code (стек, структура, правила, критерии)
design/
  content.md              весь текст по блокам
  design-system.md        цвета, шрифты, радиусы, отступы, компоненты, брейкпоинты
  sections.md             раскладка каждого блока, мобильная и десктоп
  global.css              стартовые @theme-токены Tailwind 4
  icons.ts                12 иконок (содержимое <svg>, currentColor), источник для кода
  icons/                  те же иконки файлами для просмотра
reference/
  mobile.html             эталон, мобильная 390px
  desktop.html            эталон, десктоп 1440px (резиновый)
screenshots/
  mobile-full.png, mobile-first-screen.png      (@2x)
  desktop-full.png, desktop-first-screen.png
```

Источник макетов: холст «Личная CRM — лендинг», артборды «Лендинг целиком · мобильный · вариант A» и «Лендинг целиком · десктоп · вариант A».
