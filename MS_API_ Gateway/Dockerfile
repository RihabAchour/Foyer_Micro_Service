FROM openjdk:17
EXPOSE 8090
COPY target/MS_API_Gateway-0.0.1-SNAPSHOT.jar Gateway.jar
ENTRYPOINT [ "java", "-jar", "Gateway.jar" ]
