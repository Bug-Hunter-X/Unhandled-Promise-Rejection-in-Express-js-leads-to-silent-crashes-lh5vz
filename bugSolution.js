const express = require('express');
const app = express();

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Asynchronous operation failed!'));
      }
    }, 1000);
  });
}

app.get('/', (req, res) => {
  try {
    someAsyncOperation().then(() => {
      res.send('Hello World!');
    });
  } catch (error) {
    console.error('Caught error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Global unhandledRejection event listener (best practice)
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Perform any necessary cleanup or logging
});

app.listen(3000, () => console.log('Server listening on port 3000'));