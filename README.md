# Simple REST with Nest

This project is a showcase of my expertise in back-end development using NestJS. It demonstrates a microservice architecture where a `client` publishes messages/events to Redis and a `subscriber` and/or `consumer` fetches and processes that messages.

It highlights my ability to build scalable and secure applications, utilizing modern technologies and best practices.

### Dependencies

- [NestJs](https://docs.nestjs.com/) using `@nestjs/cli`
- [Redis](https://redis.io/)
- [Docker](https://www.docker.com/)

Note: open [/publish-msg](http://localhost:3030/publish-msg) for testing publishing messages and [/emit-event](http://localhost:3030/emit-event)

### Execution

```bash
docker-compose up -d
```

### Dockerize

```bash
docker build --file ./dockerfile --tag [image_name]:[version] . --no-cache --progress=plain

# Publish image to registry
# login using specific user docker login docker.io -u username -p password
docker login docker.io
docker push [username]/[image_name]:[version]
docker logout
```

### TODO
