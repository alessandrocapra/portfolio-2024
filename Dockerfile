# Stage 1: Build
FROM node:20-alpine AS base
# Alpine uses apk, not apt-get!
RUN apk add --no-cache \
    vips-dev \
    build-base \
    autoconf \
    automake \
    libtool \
    nasm \
    zlib-dev \
    libpng-dev \
    && corepack enable

# Stage 2: Builder
FROM base AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile && \
    pnpm build

# Stage 3: Production
FROM nginx:alpine
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
