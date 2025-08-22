import postcssPxToViewport from 'postcss-px-to-viewport-8-plugin';

export default {
  plugins: [
    postcssPxToViewport({
      // 设计稿的宽度
      viewportWidth: 375,
      // 设计稿的高度（可选）
      viewportHeight: 667,
      // px转换为vw的单位精度
      unitPrecision: 3,
      // 需要转换的CSS属性，*表示所有属性
      propList: ['*'],
      // 需要转换的选择器，默认转换所有
      selectorBlackList: ['.ignore', '.hairlines'],
      // 小于或等于1px不转换为vw
      minPixelValue: 1,
      // 是否在媒体查询中也转换px
      mediaQuery: false,
      // 是否转换行内样式中的px
      include: undefined,
      // 排除某些文件夹下的文件
      exclude: [/node_modules/],
      // 是否处理横屏情况
      landscape: false,
      // 横屏时使用的单位
      landscapeUnit: 'vw',
      // 横屏时使用的视口宽度
      landscapeWidth: 568,
    }),
  ],
};
