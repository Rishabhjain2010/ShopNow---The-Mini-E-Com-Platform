// require('dotenv').config();

// import express from 'express';
// // const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;


// app.get('/', (req, res) => {
//   res.send('Welcome to ShopNow+ Backend Server!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});