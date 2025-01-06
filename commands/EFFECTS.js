const rootCss = document.querySelector(':root')

const command = {
  name: "EFFECTS",
  desc: "Enable or disable effects",
  usage: "EFFECTS [ENABLE or DISABLE]",

  run: (e, commandList) => {
    const accept = ["ENABLE", "DISABLE"]
    const [, arg] = e.target.value.split(' ');
    if (!accept.includes(arg)) 
    return document.getElementById('term_screen').innerHTML += 
      `<div>Invalid arg, please use ENABLE and DISABLE only</div>`

    switch (arg) {
      case "ENABLE":
        rootCss.style.setProperty('--terminal-placeholder-color', '#8a8a8a')
        rootCss.style.setProperty('--terminal-color', '#c9c9c9')
        rootCss.style.setProperty('--text-shadow', '0 0 0.2em currentColor, 1px 1px rgba(255, 0, 255, 0.5), -1px -1px rgba(0, 255, 255, 0.4)')
        document.getElementById('term_screen').setAttribute('effect', 'true')
        localStorage.setItem("/settings/effects", "yes")
        break;
      case "DISABLE":
        rootCss.style.setProperty('--terminal-placeholder-color', '#c9c9c9')
        rootCss.style.setProperty('--terminal-color', '#ffffff')
        rootCss.style.setProperty('--text-shadow', '0')
        document.getElementById('term_screen').removeAttribute('effect')
        localStorage.setItem("/settings/effects", "no")
        break;
    }
  },

  template: (data, padding) => {
    if (!data && data == null)
      return `<div style="display: block; height: 20px;"></div>`
    return `<div style="${padding ? `padding-left: ${padding}px` : ""}">${data}</div>`
  }
}

export default command