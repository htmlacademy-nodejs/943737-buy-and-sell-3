'use strict';

const USER_ARGV_INDEX = 2;

const DEFAULT_COMMAND = `--help`;

const ExitCode = {
  SUCCESS: 0,
  ERROR: 1,
};

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  USER_ARGV_INDEX,
  DEFAULT_COMMAND,
  ExitCode,
  HttpCode,
};
