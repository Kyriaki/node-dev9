var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Paolo',
  }
  // exécution synchrone (immédiate)
  callback(user);

  // exéction asynchrone
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(5, (userObject) => {
  console.log(userObject);
});
