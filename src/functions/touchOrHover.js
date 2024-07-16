function touchOrHover() {

    if ('ontouchstart' in window || navigator.msMaxTouchPoints) {
        return;
    }
}