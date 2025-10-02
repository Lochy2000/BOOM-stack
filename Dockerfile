# Build stage
FROM oven/bun:1 as build

WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./

# Copy source
COPY . .

# Install dependencies and build
RUN bun install --frozen-lockfile
RUN bun run build

# Production stage
FROM oven/bun:1

WORKDIR /app

ENV NODE_ENV=production

# Copy package file and install production dependencies
COPY --from=build /app/package.json ./
RUN bun install --production

# Copy built files
COPY --from=build /app/dist ./dist

# Expose port
EXPOSE 4321

# Run the app
# Set HOST to 0.0.0.0 to allow external access
ENV HOST=0.0.0.0
CMD ["bun", "./dist/server/entry.mjs"]
