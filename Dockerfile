# Use an official Node.js runtime as the base image
FROM node:14 AS build
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install project dependencies
RUN npm install
# Copy the rest of the application to the working directory
COPY . .
# Build the React application
RUN npm run production

# Use an official nginx image as the base image
FROM nginx:alpine
# Create the user for NGINX operations
RUN adduser -D -H docker
# Set working directory
WORKDIR /app
# Copy the React build from previous stage to nginx's default directory
COPY --from=build --chown=docker:docker /app/wwwroot .
# Set ownership for nginx files
RUN chown -R docker:docker /app && \
	chmod -R 765 /app && \
	chown -R docker:docker /var/cache/nginx && \
	chown -R docker:docker /var/log/nginx && \
	chown -R docker:docker /etc/nginx && \
	touch /var/run/nginx.pid && \
	chown -R docker:docker /var/run/nginx.pid
# Copy the nginx configuration template
COPY --chown=docker:docker nginx.conf /etc/nginx/conf.d/default.conf.template
# Set default user
USER docker
# Start nginx with the configuration template
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"