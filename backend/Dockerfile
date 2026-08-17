FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN apt-get update && apt-get install -y maven && mvn -q -DskipTests package
EXPOSE 8080
CMD ["java","-jar","target/forge-it-backend-0.0.1-SNAPSHOT.jar"]
