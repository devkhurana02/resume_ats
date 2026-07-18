#!/bin/bash

# Start the Celery worker in the background
echo "🚀 Starting Celery worker..."
python3 -m celery -A app.workers.celery_app worker --loglevel=info --concurrency=1 &

# Wait a few seconds for the worker to initialize
sleep 2

# Start the FastAPI server in the foreground
echo "🌐 Starting FastAPI server..."
exec uvicorn app.main:app --host 0.0.0.0 --port 8000
