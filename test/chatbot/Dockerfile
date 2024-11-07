# Dockerfile for Rasa chatbot service
FROM rasa/rasa:3.0.0

# Set the working directory
WORKDIR /app

# Copy project files into the container
COPY . .

# Install dependencies and train the model
RUN rasa train

# Expose the default Rasa port
EXPOSE 5005

# Run Rasa server
CMD ["rasa", "run", "--enable-api", "--cors", "*", "--debug"]

