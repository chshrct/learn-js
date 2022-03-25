function runOnKeys(func,...args){

    let pressedKeys = new Set()

    const comparePressedWithArgs = (pressed,args) => {
        for (let key of pressed) {
            if (!args.includes(key)) return false      
        }
        return true
    }

    const keyDown = function(/** @type {KeyboardEvent} **/event){

        pressedKeys.add(event.code)
        if (pressedKeys.size<2 ||  !comparePressedWithArgs(pressedKeys,args) ) return
        pressedKeys.clear()
        return func()
    }

    const keyUp = function(/** @type {KeyboardEvent} **/event){
        pressedKeys.delete(event.code)
    }

    document.addEventListener('keydown',keyDown)
    document.addEventListener('keyup',keyUp)

}

runOnKeys(
    () => alert("Привет!"),
    "KeyQ",
    "KeyW"
  );