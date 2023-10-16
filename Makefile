# Поднять и запустить все контейнеры
start:
	docker-compose up --build
# Остановить контейнеры
stop:
	docker-compose stop
# Запустить контейнеры
up:
	docker-compose up
# Удалить все контейнеры
down:
	docker-compose down