/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * An array of routes that are accessible to authenticated users
 * These routes require authentication
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register', '/auth/error'];

/**
 * The prefix for API auth routes
 * Routes that starts with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default login redirect URL
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';

/**
 * The default register redirect URL
 * @type {string}
 */
export const DEFAULT_REGISTER_REDIRECT = '/settings';
