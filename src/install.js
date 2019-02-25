let deferredPromt

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault() // chrome 67 would otherwise instantly show the promt
    deferredPromt = e
    console.log("beforeinstallpromt")
})

window.addEventListener('appinstalled', (evt) => {
    console.log("app was successfully installed")
})