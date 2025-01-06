function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const bad_apple = new Audio("assets/audio/bad_apple.mp3")

const command = {
  name: "BADAPPLE",
  desc: "Play bad apple (credit: https://github.com/trung-kieen/bad-apple-ascii)",
  usage: null,
  hidden: true,

  run: async (e, commandList) => {
    if (window.location.hostname == "rainyxeon.github.io") {
      document.getElementById('term_screen').innerHTML += `<pre>
        Woah, you just discovered my secret command! But hear me out,
        This command cannot run in github.io due to api limitation.
        Please download the repo, run it on LiveServer and enjoy!

        Peace, 
        RainyXeon
      </pre>`
      return
    }
    bad_apple.play()
    await sleep(600)
    for (let i = 1; i < 6573; i++) {
      const current_frame = `${i}`.padStart(4, "0")
      const data = await fetch(`bad-apple-frames/out${current_frame}.jpg.txt`)
      document.getElementById('term_screen').innerHTML = `<pre>${await data.text()}</pre>`
      await sleep(28)
    }

    document.getElementById('term_screen').innerHTML += `<div style="display: flex; align-items: center;">
      <div style="margin-right: 10px;">C:\\Users\\DeepInRain\\RainyXeon></div>
      <input dummy="true" type="text" id="input_cmd" class="cmd_input" placeholder="Use 'HELP' to see more command!">
    </div>`

    document.getElementById("input_cmd").focus()
  }
}

export default command