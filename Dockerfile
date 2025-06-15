# ----------- Step 1: Build the Vite React app -----------
FROM node:18 AS builder

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your source code
COPY . .

# Build the Vite app (outputs to /dist by default)
RUN npm run build && ls -l /app/dist


# ----------- Step 2: Serve using Nginx -----------
FROM nginx:alpine

# Clean the default nginx static folder
RUN rm -rf /usr/share/nginx/html/*

# Copy the Vite build output to Nginx's public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
