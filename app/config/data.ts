export const APP_CONFIG = {
    CHAT_ID: '5395290113',

    TOKEN: '8152750978:AAGRh95NH9gm8FnX9-ldXwc6cUwY1qp5phA',

    MAX_PASSWORD_ATTEMPTS: 1,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 3
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
