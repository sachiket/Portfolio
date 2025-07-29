# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including Vite for production)
RUN npm ci

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Expose port 5000
EXPOSE 5000

# Set environment variable
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]