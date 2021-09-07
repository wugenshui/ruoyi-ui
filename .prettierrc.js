/**
 * prettier 格式化配置
 * 属性参考：https://prettier.io/docs/en/options.html
 */
module.exports = {
  // 最大行长
  printWidth: 120,
  // tab 对应空格数
  tabWidth: 2,
  // 不使用制表符缩进
  useTabs: false,
  // 在句尾末尾打印分号
  semi: false,
  // 使用单引号代替双引号
  singleQuote: true,
  // 换行符：lf=仅换行,默认值，常见于 Linux 和 macOS 以及 git repos 内(\n);crlf=回车符加换行符，常见于Windows(\r\n);auto=依据第一行换行符维持文件的行尾
  endOfLine: 'auto'
}
