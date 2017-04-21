var add = (a, b) => a + b;

var addAsync = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 1000);
};

var square = x => x * x;

var squareAsync = (x, cb) => {
  setTimeout(() => {
    cb(x * x);
  }, 1000);
};

module.exports = {add, square, addAsync, squareAsync};
