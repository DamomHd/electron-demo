/*
 * @Author: Damom
 * @Date: 2021-03-23 22:13:13
 * @LastEditors: Damom
 * @LastEditTime: 2021-03-23 22:45:06
 * @Description: file content
 */
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true // 解决使用electron的模块出现：Uncaught ReferenceError: __dirname is not defined
    }
  }
}
