class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static findOne(username) {
    if (username === "usuario") {
      return new User("usuario", "password123");
    }
    return null;
  }
}

export default User;
