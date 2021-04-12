var config = {};

config.web = {};

config.web.port = process.env.PORT || "3000";

// Public key
config.web.secret = "topsecret";

module.exports = config;