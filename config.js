/*
============================================
; Title:  API-Gateway
; Author: Larry Ohaka
; Date: 28 March 2021
; Description:  Gateway project- API
;===========================================
*/
var config = {};

config.web = {};

config.web.port = process.env.PORT || "3000";

// public key
config.web.secret = "topsecret";

module.exports = config;