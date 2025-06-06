// getting-started.js
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

// main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
