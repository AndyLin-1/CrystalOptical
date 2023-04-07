# Build
FROM --platform=$BUILDPLATFORM openjdk:19 AS builder
RUN microdnf install findutils
WORKDIR app/
COPY --chown=gradle:gradle . .
RUN --mount=type=cache,target=/root/.gradle ./gradlew build -x test
RUN mkdir -p build/dependency && (cd build/dependency; jar -xf ../libs/*SNAPSHOT.jar)

# Run
FROM --platform=$BUILDPLATFORM openjdk:19-jdk-slim AS runner
ENV TZ=America/Toronto

RUN mkdir -p /usr/crystaloptical/src
# path to dependencies
ARG DEPENDENCY=/app/build/dependency
ARG SRC=/usr/crystaloptical/src
# copy dependencies
COPY --from=builder ${DEPENDENCY}/META-INF ${SRC}/META-INF
COPY --from=builder ${DEPENDENCY}/BOOT-INF/classes ${SRC}
COPY --from=builder ${DEPENDENCY}/BOOT-INF/lib ${SRC}/libs
WORKDIR ${SRC}
# crystaloptical user
RUN addgroup crystaloptical && adduser --disabled-password --disabled-login --ingroup crystaloptical --home ${SRC} crystaloptical
RUN echo 'crystaloptical:' | chpasswd -e
RUN chown -R crystaloptical:crystaloptical /usr/crystaloptical

USER crystaloptical

EXPOSE 8383
ENTRYPOINT ["java","-cp","./:./libs/*","com.example.crystaloptical.CrystalopticalApplication"]