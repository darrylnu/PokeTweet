const mongodb = require('mongodb');

var state = {
  db: null
};

exports.connect = function (done) {
  if (state.db) {
    return done();
  }

  mongodb.MongoClient.connect("mongodb://user:password@ds135983.mlab.com:35983/heroku_zdzbr39r", function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    console.log("Database connection ready");
    state.db = database;
    done();
  });
};

exports.get = function () {
  return state.db;
};

exports.close = function (done) {
  if (state.db) {
    state.db.close(function (err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
};
