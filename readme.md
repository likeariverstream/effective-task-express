С использованием Express.js, PostgreSQL (16), Sequelize ORM реализовано два сервиса -
сервис пользователей и сервис истории действий с пользователями.
В сервисе пользователей созданы эндпойнты:

**1. Создание пользователя**

**2. Изменение пользователя**

**3. Получение списка пользователей**

Создание и изменение пользователя отправляются в сервис истории действий с пользователями.

Сервис истории действий с пользователями отдает историю действий - с фильтром по id пользователя
и пагинацией

Как тестировать:
Развернуть проект и установить зависимости.
Заполнить файл .env
Поля DATABASE, DATABASE_HOST, USER_NAME, PASSWORD, DATABASE_DIALECT используются при создании БД.
Добавить БД с использованием соответствующих данных (установить локально и использовать pgAdmin).
Команда **npm run start** запустит оба сервиса (3000 и 3001 порт).
В директории /api-examles уже есть некоторое количество HTTP-запросов для тестирования.

Команды:

**npm run start - запуск сервисов**

**npm run lint - запуск линтера**

**npm run format - запуск форматтера**
