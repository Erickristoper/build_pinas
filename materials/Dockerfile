FROM bellsoft/liberica-openjdk-alpine-musl:17
WORKDIR /opt/app
ARG JAR_FILE=target/materials-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
EXPOSE 9090
ENTRYPOINT ["java","-jar","app.jar"]