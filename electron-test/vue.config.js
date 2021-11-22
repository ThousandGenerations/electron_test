/*
 * @Author: your name
 * @Date: 2021-11-22 22:44:36
 * @LastEditTime: 2021-11-22 22:44:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \electron-test\vue.config.js
 */
module.exports = {
    pluginOptions: {
        // 渲染进程可以使用nodejs api
        electronBuilder: { nodeIntegration: true }
    }
}