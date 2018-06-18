all: clean down docker-build

docker-build:
	docker-compose build

start:
	docker-compose up -d

stop:
	docker-compose stop

down:
	docker-compose down

clean:
	rm -rf nodes_modules logs build

install:
	npm install
	@make build-app

build-app:
	docker-compose run --rm app npm run build

test:
	docker-compose run --rm app npm run test

showlogs:
	docker-compose logs -f

ps:
	docker-compose ps

watch: start
	docker-compose stop app
	docker-compose run --rm --service-ports app npm run start:dev

testApp:
	docker-compose run --rm app npm run test

installDep:
	npm install ${deps}
	docker-compose run --rm app npm install ${deps}

migrate-up:
	docker-compose run --rm app npm run db-migrate up

migrate-down:
	docker-compose run --rm app npm run db-migrate down
