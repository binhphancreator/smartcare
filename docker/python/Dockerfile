FROM python:3.9

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl \
    nano

#Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

COPY smartcare_backend/requirements.txt requirements.txt

RUN pip install -r requirements.txt

EXPOSE 5000
