FROM maven:3.9.6-eclipse-temurin-17

WORKDIR /app

# Copy only backend folder
COPY backend ./backend

# Move into backend
WORKDIR /app/backend

# Build project
RUN mvn clean package

# Run jar
CMD ["java", "-jar", "target/wedding-0.0.1-SNAPSHOT.jar"]