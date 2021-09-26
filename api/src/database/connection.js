const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kms',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
