module.exports = {
    corsOptions: {
        origin: "*", // Or use an array of domains "http://example1.com, http://example2.com"
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

    },
    PORT: process.env.PORT || 8000,
    TIMEOUT: 10000,
}