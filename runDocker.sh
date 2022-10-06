#!/bin/bash

docker pull postgres

# Remove o container, se existir
docker stop crud-postgres-alunos
# docker container rm crud-postgres-alunos

# Gera o container
docker run --name crud-postgres-alunos -p 27017:27017 -d mongo