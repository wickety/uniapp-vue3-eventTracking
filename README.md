# uniapp-vue3-eventTracking

Uniapp 项目中选用 Vue3 技术埋点方案

此埋点方案实现

- 修改编译代码
- 使用 uni.$emit 触发事件，回调 event 参数

代码说明：
Uniapp 打包后会产生 dev 和 build 两个源码目录文件分别对应不同的打包环境。
Uniapp 打包后会产生一个 vendor.js 文件，这个文件中包含了事件处理等一系列方法
Uniapp 中事件触发会统一在一个函数中处理，它就是 patchMPEvent
将需要注入的代码通过正则表达式进行注入
至此这一步就完成了。
每当事件触发时，都会触发 uni.$emit

不过提供代码中只支持 生产环境的编译，具体说明会在代码中体现
