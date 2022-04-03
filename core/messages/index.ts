export enum ERROR_FIELD {
  EMAIL = 'email',
  NAME = 'username',
  PASSWORD = 'password',
}

const AUTH = {
  EMAIL_CONFLICT: 'email address is already registered',
  SHORT_PASSWORD: 'password must be greater than 6 letters',
  INVALID_CREDENTIALS: 'invalid credentials',
};

const USER = {
  SHORT_NAME: 'must be greater than 2',
};

export const MESSAGES = { AUTH, USER };
