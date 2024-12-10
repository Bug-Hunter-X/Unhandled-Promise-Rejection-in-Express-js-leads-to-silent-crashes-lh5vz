# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications where unhandled promise rejections within asynchronous request handlers lead to silent crashes without informative error messages.

The `bug.js` file showcases the problematic code.  The asynchronous operation `someAsyncOperation()` is not properly handled, potentially throwing an error that is not caught, causing the server to crash without providing details in the error logs.

The `bugSolution.js` file shows the corrected code which uses a `try...catch` block to handle any potential errors within the asynchronous operation and sends a more informative error response to the client.  Additionally, the example utilizes a `process.on('unhandledRejection')` event listener for global unhandled rejection handling.