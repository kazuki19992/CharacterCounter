module.exports = {
        pluginOptions: {
            electronBuilder: {
                builderOptions: {
                    productName: "charcter-counter",
                    appId: "com.kazuki19992.charcter-counter",
                    win: {
                        icon: 'src/assets/app.ico',
                        target: [
                            {
                                target: 'portable', // 'zip', 'nsis', 'portable'
                                arch: ['x64'] // 'x64', 'ia32'
                            }
                        ]
                    }
                }
            }
        }
    }