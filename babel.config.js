const presets = [
    [
        "@babel/preset-env",
        {
            targets:{
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
            "corejs": "3.6.4",
            "useBuiltIns": "usage"
        }
    ]
];

const plugins = [
    [
      "babel-plugin-transform-not-strict",
      {
        removeAll: true,
      },
      "@babel/plugin-transform-runtime",
    ],
    
];
module.exports = {presets, plugins};