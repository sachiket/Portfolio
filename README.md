# Sachiket Behera - Portfolio

A professional portfolio website showcasing senior software engineering experience, built with React, TypeScript, and Express.js.

## Features

- Modern React frontend with TypeScript
- Responsive design with Tailwind CSS
- Professional skills and experience showcase
- Contact form with validation
- Static content (no database required)
- Professional photo integration

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Docker Deployment

### Build the Docker image:
```bash
docker build -t sachiket-portfolio .
```

### Run the container:
```bash
docker run -p 5000:5000 sachiket-portfolio
```

The application will be available at `http://localhost:5000`

### Docker Compose (Optional)

Create a `docker-compose.yml` file:
```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
```

Then run:
```bash
docker-compose up -d
```

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Build Tool**: Vite
- **Deployment**: Docker, Node.js

## Project Structure

```
├── client/src/          # React frontend
│   ├── components/      # UI components
│   ├── pages/          # Page components
│   └── lib/            # Utilities
├── server/             # Express backend
├── shared/             # Shared types
└── Dockerfile          # Docker configuration
```