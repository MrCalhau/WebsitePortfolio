document.addEventListener('DOMContentLoaded', function() {
    const testsquare = document.querySelector('.testsquare');
    let toggle = true;

    testsquare.addEventListener('click', function() {
        if (toggle) {
            testsquare.classList.remove('aniback');
            testsquare.classList.add('anigo');
            console.log("go");
        } else {
            testsquare.classList.remove('anigo');
            testsquare.classList.add('aniback');
            console.log("back");
        }
        toggle = !toggle;
    });
});