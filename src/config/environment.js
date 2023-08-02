/**
 * 环境配置
 *
 * @type {string}
 */

let baseUrl = 'https://49.232.157.251';

if (process.env.NODE_ENV === "development") {
    baseUrl = "https://49.232.157.251";
} else if (process.env.NODE_ENV === "test") {
    baseUrl = "https://49.232.157.251";
} else if (process.env.NODE_ENV === "production") {
    baseUrl = "https://49.232.157.251";
}

let isProduction = false;

if (process.env.NODE_ENV === "production") {
    isProduction = true;
}

export {
    baseUrl,
    isProduction
}
