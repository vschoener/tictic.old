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

### Developer

## Watch your code

```bash
> make watch
```


# Usage

# API Documentation

Documentation can be see in the project, run

```bash
# Docker
> make apidoc
```
