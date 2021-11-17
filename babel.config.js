module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage', // entry，usage
        'corejs': 3
      }
    ]
  ],
  // 按需引入Ant Design of Vue组件样式
  // plugins: [
  //   [
  //     'import',
  //     {
  //       libraryName: 'ant-design-vue',
  //       libraryDirectory: 'es',
  //       style: true
  //     }
  //   ]
  // ]
}