(() => {
    document.addEventListener('DOMContentLoaded', () => {
        app();
        console.log('listener funciona');
    });
})();

function app() {
    console.log('App Lista');
}
