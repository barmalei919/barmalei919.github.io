# Personal Portfolio

Личный сайт: [barmalei919.github.io](https://barmalei919.github.io)

## Stack

Static HTML / CSS / vanilla JS. Без билд-системы, без зависимостей. Деплой через GitHub Pages, push в `main` и через минуту обновляется.

## Структура

```
.
├── index.html    # разметка
├── style.css     # стили
├── script.js     # typewriter, scroll-reveal, progress-bar
├── images/       # скриншоты проектов
├── files/        # резюме в PDF
└── resume/       # исходник резюме, из него печатается PDF
```

## Резюме

`files/danila-kapacyn-cv.pdf` собирается из `resume/resume.html` — правится разметка, PDF перепечатывается headless-браузером:

```
chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf="files/danila-kapacyn-cv.pdf" \
  "file:///<абсолютный путь>/resume/resume.html"
```

Вёрстка резюме — обычный текст без картинок и колонок, чтобы парсеры вакансий читали его корректно.

## Производительность

Шрифты Google подключены неблокирующе (`media="print"` + `onload`), с `preconnect` к `fonts.gstatic.com` — страница рисуется, не дожидаясь стороннего домена. Скриншоты проектов грузятся лениво, с явными `width`/`height`, чтобы вёрстка не прыгала. Вся статика — около 145 КБ.

## Почему так просто

Static-портфолио из нескольких секций не требует React/Next.js/etc. Один HTML + CSS + JS грузится быстрее любого SPA, кешируется браузером, деплоится одним коммитом. Когда инструмент уместен, он используется. Когда нет, обхожусь без него.

## Локально

Открыть `index.html` в браузере. Всё.
