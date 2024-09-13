FROM ubuntu:latest
LABEL authors="vanthien"

ENTRYPOINT ["top", "-b"]

# Use an official Maven image to build the app
FROM maven:3.8.5-openjdk-18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml file and download the project dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the project source code
COPY src ./src

# Build the project
RUN mvn clean package

# Use an official JDK runtime to run the application
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the built jar file from the previous build stage
COPY --from=build /app/target/your-app.jar /app/your-app.jar

# Expose the application's port (replace with your app's port if necessary)
EXPOSE 8080

# Set the command to run the application
CMD ["java", "-jar", ".jar"]
