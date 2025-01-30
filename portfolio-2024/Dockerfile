# Stage 1: Build
FROM node:18-bookworm AS builder

# Install system dependencies for sharp (image optimization)
RUN apt-get update && apt-get install -y \
    build-essential \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files first for better caching
COPY pnpm-lock.yaml package.json ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN pnpm build

# Stage 2: Production
FROM nginx:1.25-bookworm

# Remove default configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx config
COPY docker/nginx.conf /etc/nginx/conf.d/

# Copy built files with proper permissions
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

