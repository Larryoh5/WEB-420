var config = {};

config.web = {};

config.web.port = process.env.PORT || "3000";

module.exports = config;

// Public key
config.web.secret = "topsecret";

