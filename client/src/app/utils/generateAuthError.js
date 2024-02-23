export function generateAuthError(message) {
    switch (message) {
        case "EMAIL_EXISTS":
            return "Пользователь с таким Email уже существует";
        case "INVALID_PASSWORD":
            return "Неверный Email или пароль";
        case "EMAIL_NOT_FOUND":
            return "Неверный Email или пароль";
        default:
            return "Слишком много попыток входа. Попробуйте позже";
    }
}
