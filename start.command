#!/bin/bash
# Change directory to where this command file is located
cd "$(dirname "$0")"

echo "============================================="
echo "Church Finance Management System Starting..."
echo "============================================="

# Start the Node.js server
node server.js &
SERVER_PID=$!

# Wait a second for the server to spin up
sleep 1.5

# Open the system in the default browser
open "http://localhost:3000"

# Wait for the server process to keep the terminal open
wait $SERVER_PID
