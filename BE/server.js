const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });




wss.on('connection', (ws) => {
  console.log('New client connected');
  
  // Send a message to the client
  ws.send('Welcome to the WebSocket server!');
  
  // Handle incoming messages from clients
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    
    // print the message back to the client
    ws.send(`Server received: ${message}`);
  });

  // Handle client disconnect
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:8080');
