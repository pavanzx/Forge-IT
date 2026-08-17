# Contributing to Forge-IT

Thank you for your interest in contributing to Forge-IT! This document provides guidelines and instructions for contributing to the project.

## Getting Started

### Prerequisites
- Java 17+
- Maven 3.9+
- Node.js 16+ (for frontend development)
- Docker & Docker Compose (optional, for containerized development)

### Development Setup

#### Backend Setup
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

The backend will be available at `http://localhost:8080`

API Documentation: `http://localhost:8080/api/swagger-ui.html`

#### Frontend Setup
```bash
cd frontend
# Option 1: Using Python HTTP server
python -m http.server 5500

# Option 2: Using Node.js http-server
npx http-server -p 5500
```

The frontend will be available at `http://localhost:5500`

#### Docker Setup
```bash
docker-compose up --build
```

This will start:
- Backend: http://localhost:8080
- Frontend: http://localhost:5500
- MySQL: localhost:3306
- H2 Console: http://localhost:8080/h2-console

## Development Workflow

### Code Style
- **Java**: Follow Google Java Style Guide
- **JavaScript**: Use ESLint configuration (if provided)
- **SQL**: Use consistent naming conventions

### Commit Messages
- Use descriptive commit messages
- Format: `[TYPE] Description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Example: `[feat] Add project requirements API endpoint`

### Testing

#### Backend Tests
```bash
cd backend
mvn test
mvn verify
```

#### Frontend Tests
```bash
cd frontend
npm test  # If configured
```

### Pull Request Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m '[feat] Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Architecture Notes

### Backend Architecture
- **Controller Layer**: REST endpoints and request handling
- **Service Layer**: Business logic and data processing
- **Repository Layer**: Database access and JPA operations
- **Entity Layer**: Data models with JPA annotations
- **DTO Layer**: Data transfer objects for API responses

### Frontend Architecture
- **API Client**: `api-client.js` handles all backend communication
- **State Management**: Local storage with optional backend sync
- **UI Rendering**: Modular page renderers for each view
- **Companion System**: Character-based quote engine for UX enhancement

## Key Features

- ✅ Zero-cost deployment option with H2 database
- ✅ Full backend API with Swagger documentation
- ✅ Responsive frontend with demo data
- ✅ Docker containerization
- ✅ Comprehensive test suite
- ✅ Production-ready error handling

## Reporting Issues

- Use GitHub Issues to report bugs
- Include steps to reproduce
- Attach screenshots or logs if applicable
- Specify your environment (OS, Java version, etc.)

## Code Review

All contributions are subject to code review. Be prepared to:
- Respond to feedback
- Make requested changes
- Discuss architectural decisions

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## Questions?

Feel free to open an issue or reach out to the development team.

Happy coding! 🚀
