## Тестовое задание
***
### Стек технологий:
* NodeJS 18.16
* Express 4.18
* Redis 7.2
* Docker v20
* Docker Compose v1.29
***


#### Запуск
* [ Установить Docker](https://docs.docker.com/engine/install/ "Официальный сайт")  и [Docker-Compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04 "Неофициальный сайт")
* Установить зависимости
* Запустить приложение

#### Установить зависимости
```
npm install
```

##### Запуск приложения:
```
make start 
```
#### Запуск приложения без сборки образов:
```
make up
```
#### Остановть контейнеры:
```
make down
```

#### В папке /postman коллекция для теста приложения