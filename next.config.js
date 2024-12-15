/** @type {import('next').NextConfig} */

const SUB_DIRECTORY = "/repeats"

const isProd = process.env.NODE_ENV == "production"

module.exports = {
    publicRuntimeConfig: {
        basePath: isProd ? SUB_DIRECTORY : "",
    },
    basePath: isProd ? SUB_DIRECTORY : "",
    output: isProd ? "export" : undefined,
    assetPrefix: isProd ? SUB_DIRECTORY : "",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
}