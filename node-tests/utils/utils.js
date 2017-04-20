var add = (a, b) => a + b;

var addAsync = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b);
  }, 6000);
};

var square = x => x * x;

module.exports = {
  add,
  square,
  addAsync
};
