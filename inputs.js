document.addEventListener('DOMContentLoaded', function() {
    const topWork1 = document.querySelector('.TopWork1');
    const topWork2 = document.querySelector('.TopWork2');
    const topWork3 = document.querySelector('.TopWork3');

    var TW1A = false;
    var TW2A = false;
    var TW3A = false;

    topWork1.addEventListener('click', function() {
        TopWorkAnimate(1, TW1A, TW2A, TW3A)
        TW1A=true
        TW2A=false
        TW3A=false
    });

    topWork2.addEventListener('click', function() {
        TopWorkAnimate(2, TW1A, TW2A, TW3A)
        TW2A=true
        TW1A=false
        TW3A=false
    });

    topWork3.addEventListener('click', function() {
        TopWorkAnimate(3, TW1A, TW2A, TW3A)
        TW1A=false
        TW2A=false
        TW3A=true
    });
});


function TopWorkAnimate(pressed, TW1A, TW2A, TW3A) {
    const topWork1 = document.querySelector('.TopWork1');
    const topWork2 = document.querySelector('.TopWork2');
    const topWork3 = document.querySelector('.TopWork3');
    console.log("button pressed", pressed)
    console.log("T1",TW1A)
    console.log("T2",TW2A)
    console.log("T3",TW3A)
    if (pressed==1){
        if (TW1A==false){
            topWork1.classList.toggle('Top1Animation')
            if (TW2A==true){ topWork2.classList.toggle('Top2Reset')}
            if (TW3A==true){topWork3.classList.toggle('Top3Reset')}

            
    }}
    if (pressed==2){
        if (TW2A==false){
            topWork2.classList.toggle('Top2Animation')
            if (TW1A==true){ topWork1.classList.toggle("Top1Reset")}
            if (TW3A==true){topWork3.classList.toggle("Top2Reset")}
  
    }}
    if (pressed==3){
        if (TW3A==false){
            topWork3.classList.toggle('Top3Animation')
            if (TW1A==true){ topWork1.classList.toggle('Top1Reset')}
            if (TW2A==true){topWork2.classList.toggle('Top2Reset')}

    }}

}