/*
 * @Author: your name
 * @Date: 2021-09-10 09:16:39
 * @LastEditTime: 2021-09-10 11:49:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\hooks\dynamicScss.ts
 */

const SCSS: number = 1;
async function toScss(nameCss: string) {

  switch (nameCss) {
    case "sAbout":
      if (SCSS === 1) {
        import('../views/sAbout/index.scss').then(() => {
          console.log("import css 1")
        })
      } else {
        console.log("import css 2")
      }
      break;

    case "index":
      if (SCSS === 1) {
        import('../views/sAbout/index.scss').then(() => {
          console.log("import css 1")
        })
      } else {
        console.log("import css 2")
      }
      break;

    // default:
    //   break;
  }

}
export {
  toScss
}