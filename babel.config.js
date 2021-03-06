module.exports = {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/typescript"
    ],
    "plugins": [
        "@babel/plugin-transform-runtime", 
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-optional-chaining"
    ],
    "env": {
        "es": {
            "presets": [
                [
                "@babel/env",
                {
                    "modules": false
                }
                ]
            ]
        }
    }
}
  