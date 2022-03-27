module.exports = {
  appId: "com.electron.mariafrc.tictactoevue",
  productName: "Tic Tac Toe Vue",
  copyright: "Copyright © 2022 Franck Bemaria",
  win: {
    target: "portable"
  },
  files: [
    "dist_vue/**/*",
    "electron/**/*"
  ],
  directories: {
    "buildResources": "assets",
    "output": "dist_electron"
  }
}