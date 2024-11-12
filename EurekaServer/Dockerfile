FROM openjdk:17
EXPOSE 8761
COPY target/EurekaServer-0.0.1-SNAPSHOT.jar Eureka.jar
ENTRYPOINT [ "java", "-jar", "Eureka.jar" ]