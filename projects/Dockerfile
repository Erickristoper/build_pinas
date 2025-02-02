FROM bellsoft/liberica-openjdk-alpine-musl:17
WORKDIR /opt/app
ARG JAR_FILE=target/projects-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
EXPOSE 9091
ENTRYPOINT ["java","-jar","app.jar"]