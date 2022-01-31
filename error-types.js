class RecordNotFoundError extends Error {}
class UserAlreadyExistError extends Error {}
class UnauthorizedError extends Error {}

module.exports = {
  RecordNotFoundError,
  UserAlreadyExistError,
  UnauthorizedError,
};
