export declare const CHAR_SETS: {
    readonly lowercase: "abcdefghijklmnopqrstuvwxyz";
    readonly uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    readonly numbers: "0123456789";
    readonly symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?";
    readonly ambiguous: "il1Lo0O";
};
export interface PasswordOptions {
    length: number;
    includeLowercase?: boolean;
    includeUppercase?: boolean;
    includeNumbers?: boolean;
    includeSymbols?: boolean;
    excludeAmbiguous?: boolean;
}
/**
 * Generate a secure random password
 * @param options - Password generation options
 * @returns Generated password
 */
export declare function generatePassword(options: PasswordOptions): string;
//# sourceMappingURL=index.d.ts.map