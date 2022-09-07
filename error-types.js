class RecordNotFoundError extends Error {}
class UserAlreadyExistError extends Error {
  constructor(args) {
    super(args);
    this.status = 400;
    this.message = "User Already exist";
  }
}
class UnauthorizedError extends Error {}

module.exports = {
  RecordNotFoundError,
  UserAlreadyExistError,
  UnauthorizedError,
};
