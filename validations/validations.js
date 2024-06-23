import { body } from "express-validator";

export const loginValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 6 символов").isLength({
    min: 6,
  }),
];

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 6 символов").isLength({
    min: 6,
  }),
  body("firstName", "Укажите имя").isLength({ min: 3 }),
  body("surname", "Укажите фамилию").isLength({ min: 3 }),
  body("avatarUrl", "Неверный формат").optional().isURL(),
];


