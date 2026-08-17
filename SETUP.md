# Forge-IT Environment Configuration

## Development Environment Setup

### Backend Environment Variables (create .env file in backend/)
```
SPRING_DATASOURCE_URL=jdbc:h2:mem:forgeit
SPRING_DATASOURCE_DRIVERCLASSNAME=org.h2.Driver
SPRING_JPA_HIBERNATE_DDL_AUTO=update
SPRING_H2_CONSOLE_ENABLED=true
SPRING_APPLICATION_NAME=forge-it
SERVER_PORT=8080
```

### Production Environment Variables (with MySQL)
```
SPRING_DATASOURCE_URL=jdbc:mysql://mysql-host:3306/forgeit
SPRING_DATASOURCE_USERNAME=forgeit_user
SPRING_DATASOURCE_PASSWORD=secure_password_here
SPRING_DATASOURCE_DRIVERCLASSNAME=com.mysql.cj.jdbc.Driver
SPRING_JPA_HIBERNATE_DDL_AUTO=validate
SPRING_JPA_SHOW_SQL=false
SERVER_PORT=8080
```

### Frontend Environment Variables (if using build system)
```
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_ENV=development
```

## Docker Environment Configuration

### Docker Compose Environment Variables
Create `.env` file in project root:
```
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_DATABASE=forgeit
MYSQL_USER=forgeit_user
MYSQL_PASSWORD=forgeit_password
DB_HOST=forge-it-db
DB_PORT=3306
BACKEND_PORT=8080
FRONTEND_PORT=5500
```

## Configuration Profiles

### application.properties (Development - H2)
Already configured in: `backend/src/main/resources/application.properties`

### application-mysql.properties (Production)
Create: `backend/src/main/resources/application-mysql.properties`
```properties
server.port=8080
spring.application.name=forge-it
spring.datasource.url=jdbc:mysql://${DB_HOST:localhost}:${DB_PORT:3306}/${DB_NAME:forgeit}
spring.datasource.username=${DB_USER:forgeit_user}
spring.datasource.password=${DB_PASSWORD:forgeit_password}
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

### Run with MySQL Profile
```bash
mvn spring-boot:run -Dspring-boot.run.arguments="--spring.profiles.active=mysql"
```

## Configuration Best Practices

1. **Never commit secrets** to version control
2. **Use environment variables** for sensitive data
3. **Create example .env files** (without values)
4. **Use separate profiles** for dev/test/prod
5. **Document all configuration options**
6. **Validate configuration on startup**
7. **Use ConfigurationProperties** for type-safe config

## Logging Configuration

### Development
```properties
logging.level.root=WARN
logging.level.com.forgeit=DEBUG
logging.level.org.springframework.web=INFO
logging.level.org.hibernate=INFO
```

### Production
```properties
logging.level.root=WARN
logging.level.com.forgeit=INFO
logging.file.name=logs/forge-it.log
logging.file.max-size=10MB
logging.file.max-history=30
logging.pattern.console=%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n
logging.pattern.file=%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n
```

## Database Connection Pooling

```properties
# HikariCP Configuration
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.connection-timeout=20000
spring.datasource.hikari.idle-timeout=300000
spring.datasource.hikari.max-lifetime=1200000
```

## CORS Configuration

### For Development (frontend on different port)
```properties
spring.web.cors.allowed-origins=http://localhost:5500,http://localhost:3000
spring.web.cors.allowed-methods=GET,POST,PUT,DELETE,OPTIONS
spring.web.cors.allowed-headers=*
spring.web.cors.allow-credentials=true
```

### For Production (specific domain)
```properties
spring.web.cors.allowed-origins=https://yourdomain.com
spring.web.cors.allowed-methods=GET,POST,PUT,DELETE
spring.web.cors.allowed-headers=Authorization,Content-Type
spring.web.cors.allow-credentials=true
spring.web.cors.max-age=3600
```

## Running with Different Configurations

### Development with H2
```bash
mvn spring-boot:run
```

### Development with MySQL
```bash
docker run --name mysql-dev -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=forgeit -p 3306:3306 -d mysql:8.0
mvn spring-boot:run -Dspring-boot.run.arguments="--spring.profiles.active=mysql"
```

### Docker Compose (Complete Stack)
```bash
docker-compose up --build
```

### Production Deployment
```bash
java -Dspring.profiles.active=prod -jar forge-it-backend-1.0.0.jar
```

## Environment-Specific Setup Checklist

### Development
- [ ] Java 17 installed
- [ ] Maven 3.9+ installed
- [ ] H2 database configured
- [ ] Backend running on port 8080
- [ ] Frontend running on port 5500
- [ ] Swagger UI accessible

### Testing
- [ ] All unit tests passing
- [ ] Integration tests passing
- [ ] Test coverage > 80%
- [ ] Mock data configured
- [ ] H2 database fresh on each run

### Staging
- [ ] MySQL database created
- [ ] Environment variables configured
- [ ] Security configured
- [ ] CORS properly restricted
- [ ] Logging configured
- [ ] Backups configured

### Production
- [ ] MySQL on separate server
- [ ] SSL/TLS certificates installed
- [ ] Environment variables secured
- [ ] Monitoring configured
- [ ] Backup & recovery tested
- [ ] Load balancing configured
- [ ] CDN configured for static assets
- [ ] Database backups automated
