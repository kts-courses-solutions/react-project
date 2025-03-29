# E-commerce

Проект для [курса KTS по React'у](https://metaclass.kts.studio/beginner_react).
Представляет из себя интернет магазин.

## Описание проекта

### Макет

[Ссылка на Figma](https://www.figma.com/file/V105wd67bkF2X7oOzCLPEG/E-commerce?type=design&mode=design&t=9HPHdd9OSiqVsoSo-0)

### API

Документация

[Получение списка товаров](https://api.escuelajs.co/api/v1/products)

[Получение информации об одном товаре](https://api.escuelajs.co/api/v1/products/{id})

В макетах также есть отображение количества всех товаров и количества страниц.
Для получения этой информации нужно использовать метод получения списка товаров без параметров фильтрации и пагинации

## Запуск локально

### 1. Клонирование Github репозитория

```bash
git clone https://github.com/kts-courses-solutions/react-project.git
cd react-project
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск

```bash
npm run dev
```
