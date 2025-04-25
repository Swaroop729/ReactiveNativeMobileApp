const {getDefaultConig} = require("expo/metro-config")
const {withNativeWind} = require("nativewind/metro")

const config = getDefaultConig(__dirname)

module.exports = withNativeWind(config,

    {input
:'./app/globals.css'})
