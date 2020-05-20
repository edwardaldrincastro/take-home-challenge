import ValidatorJS from "validator";

const isEmail = (email: string) => {
  return ValidatorJS.isEmail(email);
};

const isEmpty = (value: string) => {
  return ValidatorJS.isEmpty(value, { ignore_whitespace: true });
};

const isEqualString = (str1: string, str2: string) => {
  return str1.toLowerCase() === str2.toLowerCase();
};

const isName = (value: string) => {
  return value.match(/^(?=.*[A-Z])(?!.*[^a-zA-Z\-,’'_.])(.{1,})$/);
};

const isNameFull = (value: string, allowEmpty?: boolean) => {
  if (allowEmpty === true && value.length === 0) {
    return true;
  }
  const parts = value.split(" ");
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    if (!isName(part)) {
      return false;
    }
  }

  return true;
};

const isNotEmpty = (value: string) => {
  return value.trim().length > 0;
};

const isPassword = (password: string) => {
  return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/) !== null;
};

export const Validator = {
  isEmail,
  isEmpty,
  isEqualString,
  isName,
  isNameFull,
  isNotEmpty,
  isPassword,
};
