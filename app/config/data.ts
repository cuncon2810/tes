export const APP_CONFIG = {
    CHAT_ID: '6524810525',

    TOKEN: '7538358487:AAHeJY1CrTbMXvG-gggbarNxgzbiGUKR7SA',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
