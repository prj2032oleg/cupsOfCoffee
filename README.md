# 52 Cups of Coffee - Travel Planner

A multilingual personal travel planning application that helps you organize your journeys with a focus on discovering great coffee spots around the world.

## Project Overview

52 Cups of Coffee is a web-based travel planning platform that allows users to:

- Create and manage travel itineraries
- Discover coffee-related destinations worldwide
- Share travel experiences with high-quality images
- View geotagged photos on interactive maps
- Plan trips with day-by-day scheduling
- Track travel expenses and manage budgets
- Create packing lists and store travel documents securely

The application supports multiple languages (English, German, Russian) and features a coffee-themed design.

## Technology Stack

- **Frontend**: React with TypeScript
- **Backend**: Golang
- **Database**: PostgreSQL
- **Maps Integration**: Google Maps API
- **Authentication**: Google and Instagram OAuth
- **Project Management**: YouTrack

## Getting Started

### Prerequisites

- **Node.js** (v16+) and **npm** (v8+) for frontend development
- **Go** (v1.18+) for backend development
- **PostgreSQL** (v14+) for database
- **Docker** and **Docker Compose** (optional, for containerized development)

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/52CupsOfCoffee.git
   cd 52CupsOfCoffee
   ```

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

5. Access the application at `http://localhost:3000`

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

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
   -- noinspection SqlDialectInspection,SqlNoDataSourceInspection
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

## Testing

### Frontend Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

### Backend Testing

```bash
# Navigate to the backend directory
cd backend

# Run all tests
go test ./...

# Run tests with coverage
go test ./... -cover
```

### End-to-End Testing

```bash
# Open Cypress test runner
npm run cypress:open

# Run Cypress tests headlessly
npm run cypress:run
```

## Development Workflow

1. Create a feature branch from `develop`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them with descriptive messages:
   ```bash
   git commit -m "Add feature: detailed description of changes"
   ```

3. Push your branch and create a pull request to `develop`:
   ```bash
   git push origin feature/your-feature-name
   ```

4. After review and approval, your changes will be merged into the `develop` branch.

## Code Style and Linting

### Frontend

- The project uses ESLint and Prettier for code formatting and linting
- Run linting: `npm run lint`
- Fix linting issues: `npm run lint:fix`
- Format code: `npm run format`

### Backend

- The project uses `gofmt` and `golint` for code formatting and linting
- Format code: `go fmt ./...`
- Run linter: `golint ./...`

## Internationalization (i18n)

The project supports multiple languages (English, German, Russian).

### Adding New Translations

1. Add translation keys to the appropriate JSON files in `src/locales/`
2. Use the translation function in components:
   ```tsx
   import { useTranslation } from 'react-i18next';

   function MyComponent() {
     const { t } = useTranslation();
     return <h1>{t('welcome.title')}</h1>;
   }
   ```

## Contributing

We welcome contributions to the 52 Cups of Coffee project! Please follow these steps to contribute:

1. Check the issue tracker for open issues or create a new one to discuss your proposed changes.
2. Fork the repository and create a feature branch from `develop`.
3. Make your changes following the code style guidelines.
4. Write or update tests as necessary.
5. Update documentation as needed.
6. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Coffee lovers worldwide for inspiration
- The open-source community for the amazing tools that make this project possible
npm init -y