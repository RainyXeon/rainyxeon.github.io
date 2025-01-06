const command = {
  name: "SYSINFO",
  desc: "Infomation for this Rainy's DOS",
  usage: null,

  run: (e, commandList) => {
    document.getElementById('term_screen').innerHTML += `
      <div>rDOS (Rainy's DOS)</div>
      <div>Version 1.0.3 Copyright (C) DeepInRain Production. All rights reserved.</div>
      <div style="display: block; height: 20px;"></div>
    `
  },

  template: (data, padding) => {
    if (!data && data == null)
      return `<div style="display: block; height: 20px;"></div>`
    return `<div style="${padding ? `padding-left: ${padding}px` : ""}">${data}</div>`
  }
}

export default command