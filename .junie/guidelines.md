# 52 Cups of Coffee - Development Guidelines

This document provides essential information for developers working on the 52 Cups of Coffee Travel Planner project.

## Build/Configuration Instructions

### Prerequisites

- **Node.js** (v16+) and **npm** (v8+) for frontend development
- **Go** (v1.18+) for backend development
- **PostgreSQL** (v14+) for database
- **Docker** and **Docker Compose** (optional, for containerized development)

### Frontend Setup

1. Navigate to the project root directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root with the following variables:
   ```
   REACT_APP_API_URL=http://localhost:8080/api
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the `backend` directory
2. Install Go dependencies:
   ```bash
   go mod tidy
   ```
3. Create a `.env` file in the `backend` directory with the following variables:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_NAME=cupsofcoffee
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   INSTAGRAM_CLIENT_ID=your_instagram_client_id
   INSTAGRAM_CLIENT_SECRET=your_instagram_client_secret
   ```
4. Start the backend server:
   ```bash
   go run cmd/server/main.go
   ```

### Database Setup

1. Create a PostgreSQL database:
   ```sql
   CREATE DATABASE cupsofcoffee;
   ```
2. The application will automatically run migrations on startup, but you can manually run them:
   ```bash
   cd backend
   go run cmd/migrate/main.go
   ```

### Docker Setup (Optional)

1. Build and start all services:
   ```bash
   docker-compose up -d
   ```
2. Access the application at `http://localhost:3000`

## Testing Information

### Frontend Testing

The project uses Jest and React Testing Library for frontend testing.

#### Running Frontend Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch

# Run a specific test file
npm test -- src/components/Button/Button.test.tsx
```

#### Writing Frontend Tests

1. Create test files with the naming convention `*.test.tsx` or `*.test.ts`
2. Use React Testing Library for component testing
3. Example test for a Button component:

```tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders with the correct label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Backend Testing

The project uses Go's built-in testing package for backend testing.

#### Running Backend Tests

```bash
# Navigate to the backend directory
cd backend

# Run all tests
go test ./...

# Run tests with coverage
go test ./... -cover

# Run tests for a specific package
go test ./auth

# Run tests verbosely
go test -v ./...
```

#### Writing Backend Tests

1. Create test files with the naming convention `*_test.go`
2. Use Go's built-in testing package
3. Example test for an auth service:

```go
package auth

import (
	"testing"
)

func TestRegisterUser(t *testing.T) {
	// Create a new auth service
	service := NewAuthService()

	// Test successful registration
	t.Run("Successful Registration", func(t *testing.T) {
		user, err := service.RegisterUser("john@example.com", "John Doe")
		
		if err != nil {
			t.Errorf("Expected no error, got %v", err)
		}
		
		if user.Email != "john@example.com" {
			t.Errorf("Expected email to be 'john@example.com', got '%s'", user.Email)
		}
	})
}
```

### End-to-End Testing

The project uses Cypress for end-to-end testing.

#### Running E2E Tests

```bash
# Open Cypress test runner
npm run cypress:open

# Run Cypress tests headlessly
npm run cypress:run
```

## Development Information

### Code Style and Linting

#### Frontend

- The project uses ESLint and Prettier for code formatting and linting
- Run linting: `npm run lint`
- Fix linting issues: `npm run lint:fix`
- Format code: `npm run format`

#### Backend

- The project uses `gofmt` and `golint` for code formatting and linting
- Format code: `go fmt ./...`
- Run linter: `golint ./...`

### Git Workflow

1. Create a feature branch from `develop`: `git checkout -b feature/your-feature-name`
2. Make your changes and commit them with descriptive messages
3. Push your branch and create a pull request to `develop`
4. After review and approval, merge the pull request

### Internationalization (i18n)

The project supports multiple languages (English, German, Russian).

#### Adding New Translations

1. Add translation keys to the appropriate JSON files in `src/locales/`
2. Use the translation function in components:
   ```tsx
   import { useTranslation } from 'react-i18next';
   
   function MyComponent() {
     const { t } = useTranslation();
     return <h1>{t('welcome.title')}</h1>;
   }
   ```

### Database Schema

The database uses a multilingual content approach:

- Core tables have language-agnostic fields
- Content tables have a `language_code` field to identify the language
- Relationships are maintained through foreign keys

### API Documentation

The API is documented using Swagger/OpenAPI. Access the documentation at:
- Development: `http://localhost:8080/swagger/index.html`
- Production: `https://api.52cupsofcoffee.com/swagger/index.html`

### Performance Considerations

1. Use React.memo for components that render often but rarely change
2. Implement lazy loading for images and routes
3. Use proper database indexing for frequently queried fields
4. Implement caching for expensive operations

### Security Best Practices

1. Always use parameterized queries to prevent SQL injection
2. Implement proper input validation on both client and server
3. Use HTTPS for all communications
4. Store passwords using bcrypt or Argon2 hashing
5. Implement rate limiting for authentication endpoints
6. Use Content Security Policy (CSP) headers