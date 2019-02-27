window.deferredPromt

window.addEventListener('beforeinstallprompt', (e) => {
    console.log("beforeinstallpromt")
    e.preventDefault() // chrome 67 would otherwise instantly show the promt
    window.deferredPromt = e
    window.deferredPromt.promt()

})

window.addEventListener('appinstalled', (evt) => {
    console.log("app was successfully installed")
})