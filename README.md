# TicTic Back-end API

Back-end assignment that use:
- Node
- PostgresSQL
- Typescript
- Webpack
- Docker
- Makefile

## Requirements
- Node >= 10.x
- PostgresSQL >= 11.x

## Info
Project uses Typescript to type hint the code and enforce it. Besides, it uses Webpack to build, watch and hot reload the server for
the developers

## Common usage

Setting up the .env if required (Mandatory with Docker usage) and set your values
```bash
> cp .env.sample .env
```

## Installation

Project uses a Makefile to shortcut the commands, you are free to look inside and use
docker-compose command on its own.

``` bash
> make build
> make install
```

## RUN
```bash
> make start
```

### Developer

## Watch your code

```bash
> make watch
```

## Create new Model and Migrations

As we use Typescript, I advice to look at the documentation there to create a model:
[https://github.com/sequelize/cli](https://github.com/sequelize/cli)
Then when you're done with the model, use sequelize-cli command to generate a new migration file:
```bash
> npm run sequelize -- migration:generate --name migration_name_or_model_name
```

Then move that file from `build/migrations` folder to `src/migrations` folder (for now, with TS, I didn't find a better way to manage this case). And again you should review this file to use Typescript.
Once you're done and want to start the migration, just rebuild the project and run the following command:
```bash
> npm run sequelize db:migrate
```
Check your modified or created table to confirm your migration.

## Update Model

You can update a model using migration, follow the step from [## Create new Model and Migrations] above and create your migration file
to alter the table

# Usage

# API Documentation

Documentation can be see in the project, run

```bash
# Docker
> make apidoc
```
