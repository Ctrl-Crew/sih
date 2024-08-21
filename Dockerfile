# Stage 1: Build the Tauri app

# Use an official Rust image as the build environment
FROM rust:1.72 as builder

# Install dependencies for Tauri
RUN apt-get update && apt-get install -y \
    libwebkit2gtk-4.0-dev \
    build-essential \
    libssl-dev \
    libgtk-3-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create a new user to avoid running as root
RUN useradd -m appuser
WORKDIR /home/appuser/app

# Copy the source code into the container
COPY . .

# Install Tauri dependencies
RUN cargo install tauri-cli

# Build the Tauri app
RUN cargo tauri build

# Stage 2: Create a lightweight container for the Tauri app

# Use a lightweight base image
FROM debian:buster-slim

# Install required libraries
RUN apt-get update && apt-get install -y \
    libwebkit2gtk-4.0-dev \
    libssl-dev \
    libgtk-3-dev \
    && rm -rf /var/lib/apt/lists/*

# Create a user and group to run the app
RUN groupadd -r appuser && useradd -m -r -g appuser appuser

# Copy the built app from the builder stage
COPY --from=builder /home/appuser/app/target/release/bundle /opt/app

# Set permissions
RUN chown -R appuser:appuser /opt/app

# Set the user to the newly created user
USER appuser

# Set the working directory
WORKDIR /opt/app

# Command to run the Tauri app
CMD ["./appname"]

