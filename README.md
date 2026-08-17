# Forge-IT — From Idea to Launch

Forge-IT is a zero-cost portfolio demonstration that turns a project idea into requirements, recommendations, a roadmap and actionable tasks. It features a complete full-stack application with a responsive frontend, robust REST API backend, and comprehensive documentation.

## 🎯 Project Overview

Forge-IT demonstrates a professional web application architecture with:
- **Frontend**: Responsive Vue-inspired UI with companion characters
- **Backend**: Spring Boot REST API with complete CRUD operations
- **Database**: H2 for demo, MySQL-ready for production
- **DevOps**: Docker & Docker Compose for containerization
- **Testing**: Unit tests, integration tests, and test coverage
- **Documentation**: Swagger/OpenAPI, comprehensive guides, contributing guidelines

## ✨ Features Included

### Frontend
- Responsive retro-3D-inspired portfolio UI
- Demo mode with no API key required
- Local project persistence using localStorage with backend sync
- Idea Lab for capturing project concepts
- Deterministic tool recommendation scores
- Official tool links and resources
- Roadmap and checklist tracking
- Progress persistence
- Continue-project workflow
- Testing plan interface
- Forge-IT AI assistant
- Companion character system with contextual quotes

### Backend
- **Complete REST API** with all CRUD operations:
  - Users management
  - Projects management
  - Requirements tracking
  - Tasks and checklist
  - Categories
  - Dashboard statistics
- **JPA/Hibernate** ORM with H2 and MySQL support
- **Spring Security** ready architecture
- **Global error handling** with custom exception classes
- **Input validation** with constraint annotations
- **Swagger/OpenAPI** documentation
- **Health check** endpoint
- **Analysis and recommendation** engine

### Database
- **H2 in-memory** for zero-cost demo development
- **MySQL** configuration for production deployment
- **Automatic schema generation** with Hibernate
- **Proper relationships** and foreign keys
- **Indexed queries** for performance

### DevOps & Deployment
- **Docker & Docker Compose** for complete stack orchestration
- **Nginx reverse proxy** for frontend serving and API routing
- **Multi-container setup**: Backend, Frontend, MySQL, H2
- **Health checks** for all services
- **Volume management** for data persistence
- **Network isolation** with internal communication

### Testing
- **Unit tests** for services
- **Integration tests** for controllers
- **Mockito** for test mocking
- **JUnit 5** test framework
- Comprehensive test coverage examples

### Documentation
- **Swagger UI** at `/api/swagger-ui.html`
- **Contributing guidelines** in CONTRIBUTING.md
- **Setup instructions** in README
- **API documentation** with all endpoints
- **Architecture documentation**

## 🚀 Quick Start

### Option 1: Frontend Demo (No Backend)
```bash
cd frontend
python -m http.server 5500
```
Open: http://localhost:5500

### Option 2: Backend + Frontend (Local)

**Terminal 1 - Backend:**
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd frontend
python -m http.server 5500
```

Open: http://localhost:5500
Backend API: http://localhost:8080/api
Swagger Docs: http://localhost:8080/api/swagger-ui.html

### Option 3: Docker (Complete Stack)
```bash
docker-compose up --build
```

Services:
- **Frontend**: http://localhost:5500
- **Backend API**: http://localhost:8080
- **Swagger UI**: http://localhost:8080/api/swagger-ui.html
- **MySQL**: localhost:3306
- **H2 Console**: http://localhost:8080/h2-console

## 📋 System Requirements

### For Local Development
- **Java 17+** (for backend)
- **Maven 3.9+** (for building)
- **Python 3.8+** or Node.js (for frontend server)

### For Docker Development
- **Docker** 20.10+
- **Docker Compose** 1.29+

## 🏗️ Project Structure

```
forge-it/
├── backend/                          # Spring Boot REST API
│   ├── src/
│   │   ├── main/java/com/forgeit/
│   │   │   ├── controller/          # REST endpoints
│   │   │   ├── service/             # Business logic
│   │   │   ├── repository/          # Data access
│   │   │   ├── entity/              # JPA entities
│   │   │   ├── dto/                 # Data transfer objects
│   │   │   ├── exception/           # Custom exceptions & handlers
│   │   │   ├── config/              # Spring configuration
│   │   │   └── ForgeItApplication.java
│   │   ├── resources/
│   │   │   └── application.properties
│   │   └── test/                    # Unit & integration tests
│   ├── pom.xml
│   └── Dockerfile
├── frontend/                        # Responsive SPA
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── api-client.js               # Backend API client
│   └── nginx.conf
├── docker-compose.yml              # Multi-container orchestration
├── README.md                        # Project documentation
├── CONTRIBUTING.md                 # Contributing guidelines
├── LICENSE                         # MIT License
└── .gitignore                      # Git ignore patterns
```

## 🔌 API Endpoints

### Health & System
- `GET /api/health` - Health check
- `GET /api/dashboard/stats` - Dashboard statistics
- `POST /api/analyze` - Project analysis

### Projects
- `GET /api/projects` - List all projects
- `GET /api/projects/{id}` - Get project details
- `POST /api/projects` - Create project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project
- `GET /api/projects/{id}/progress` - Get project progress

### Tasks
- `GET /api/tasks` - List all tasks
- `GET /api/tasks/{id}` - Get task details
- `GET /api/tasks/project/{projectId}` - Get project tasks
- `POST /api/tasks` - Create task
- `PUT /api/tasks/{id}` - Update task
- `PATCH /api/tasks/{id}/status` - Update task status
- `DELETE /api/tasks/{id}` - Delete task

### Requirements
- `GET /api/requirements` - List all requirements
- `GET /api/requirements/{id}` - Get requirement
- `GET /api/requirements/project/{projectId}` - Get project requirements
- `GET /api/requirements/project/{projectId}/core` - Get core requirements
- `POST /api/requirements` - Create requirement
- `PUT /api/requirements/{id}` - Update requirement
- `DELETE /api/requirements/{id}` - Delete requirement

### Users
- `GET /api/users` - List all users
- `GET /api/users/{id}` - Get user
- `POST /api/users` - Create user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### Categories
- `GET /api/categories` - List all categories
- `GET /api/categories/{id}` - Get category
- `POST /api/categories` - Create category
- `PUT /api/categories/{id}` - Update category
- `DELETE /api/categories/{id}` - Delete category

## 🗄️ Database Schema

### Users Table
- id (PK)
- username (UNIQUE)
- email (UNIQUE)
- password
- fullName
- role (ENUM: USER, ADMIN, DEVELOPER)
- avatar
- xpLevel
- points

### Projects Table
- id (PK)
- name
- idea (TEXT)
- targetAudience
- problemSolved (TEXT)
- platform
- experience
- preferredTech
- budget
- timeline
- complexityScore
- estimatedCost
- estimatedTime
- createdDate
- updatedDate
- primaryStack
- user_id (FK)

### Tasks Table
- id (PK)
- title
- description (TEXT)
- phase
- done
- difficulty
- estimatedTime
- dependencies
- tools
- project_id (FK)

### Requirements Table
- id (PK)
- title
- description (TEXT)
- priority (ENUM: LOW, MEDIUM, HIGH)
- category
- isCore
- project_id (FK)

### Categories Table
- id (PK)
- name (UNIQUE)
- description
- icon
- count

## 🧪 Testing

### Run Backend Tests
```bash
cd backend
mvn test              # Unit tests
mvn verify            # Integration tests
mvn test jacoco:report  # Test coverage (if configured)
```

### Test Classes Included
- `UserServiceTest` - User service unit tests
- `ProjectServiceTest` - Project service unit tests
- `UserControllerIntegrationTest` - REST endpoint integration tests

## 🔒 Security Considerations

The current implementation is a **demo/portfolio project** and includes:
- CORS enabled for all origins (development only)
- No authentication layer (add Spring Security for production)
- Input validation on DTOs
- Global exception handling
- SQL injection prevention via JPA/Hibernate

**⚠️ For Production Use:**
1. Implement Spring Security with JWT
2. Use environment variables for sensitive data
3. Enable HTTPS/TLS
4. Restrict CORS to specific domains
5. Add rate limiting
6. Implement audit logging
7. Use prepared statements (JPA does this automatically)

## 📚 Documentation

### API Documentation
- Swagger UI: http://localhost:8080/api/swagger-ui.html
- OpenAPI JSON: http://localhost:8080/api/v3/api-docs

### Additional Resources
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA Guide](https://spring.io/projects/spring-data-jpa)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [Docker Documentation](https://docs.docker.com/)

## 🛠️ Development Commands

### Backend
```bash
cd backend

# Build
mvn clean install

# Run
mvn spring-boot:run

# Tests
mvn test
mvn verify

# Format code
mvn spotless:apply

# Generate OpenAPI spec
mvn springdoc-openapi:generate
```

### Frontend
```bash
cd frontend

# Serve
python -m http.server 5500
npx http-server -p 5500

# Build (if using build tools)
npm run build
```

### Docker
```bash
# Build
docker-compose build

# Run
docker-compose up

# Run in background
docker-compose up -d

# Stop
docker-compose down

# Logs
docker-compose logs -f [service-name]

# Remove volumes
docker-compose down -v
```

## 🔄 Deployment Pipeline

### Development to Production
1. **Local Testing**: Run locally with H2
2. **Docker Testing**: Test with docker-compose
3. **MySQL Migration**: Update to MySQL connection
4. **Environment Config**: Use environment variables
5. **CI/CD Integration**: Add GitHub Actions/GitLab CI
6. **Cloud Deployment**: Deploy to AWS/Azure/GCP

## 📊 Performance Optimization

### Backend
- Database indexing on frequently queried fields
- Lazy loading for relationships
- Pagination for large datasets
- Caching (can be added with Spring Cache)
- Connection pooling

### Frontend
- Lazy loading of components
- LocalStorage caching
- Gzip compression (via nginx)
- Asset minification
- Browser caching headers

## 🐛 Troubleshooting

### Backend Won't Start
```bash
# Check if port 8080 is in use
lsof -i :8080

# Clear Maven cache
mvn clean
rm -rf ~/.m2/repository
mvn install
```

### Database Connection Issues
```bash
# H2 Console access
http://localhost:8080/h2-console
# Default: JDBC URL = jdbc:h2:mem:forgeit

# MySQL connection
mysql -h localhost -u forgeit_user -p forgeit
# Password: forgeit_password
```

### Frontend Not Loading
```bash
# Clear browser cache (Ctrl+Shift+Delete)
# Check console for errors (F12)
# Verify backend is running
curl http://localhost:8080/api/health
```

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contributing guidelines.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Spring Boot team for excellent framework
- Bootstrap for responsive CSS framework
- H2 database for zero-cost development option
- Docker for containerization
- All open-source contributors

## 📞 Support

For issues, questions, or suggestions:
1. Check existing issues and documentation
2. Open a new GitHub issue with detailed information
3. Follow the contributing guidelines

## 🎓 Learning Resources

This project demonstrates:
- ✅ Full-stack application architecture
- ✅ RESTful API design
- ✅ ORM with JPA/Hibernate
- ✅ Spring Boot best practices
- ✅ Docker containerization
- ✅ Frontend-backend integration
- ✅ Testing strategies
- ✅ API documentation
- ✅ Project organization

Perfect for portfolio, learning, or production use!

---

**Created with ❤️ for developers learning full-stack development**

**Last Updated**: August 2026
**Version**: 1.0.0

