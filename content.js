
console.log("hey!");

// function unblurMediumCom() {
//     var ee = document.getElementsByClassName("js-progressiveMedia-thumbnail");
//     var i;
//     for (i = 0; i < ee.length; i++) {
//         ee[i].style.display = "None";
//         console.log("e", ee[i])
//     }
//     console.log("ub");
// }


// window.setTimeout(unblurMediumCom, 100);



function unblurMediumCom2() {
    var ee = document.getElementsByClassName("progressiveMedia");
    var i;
    for (i = 0; i < ee.length; i++) {
        // ee[i].style.display = "inherit";
        delete(ee[i].style.display);
        console.log("e", ee[i]);
    }
    console.log("ub");
}


window.setTimeout(unblurMediumCom2, 2000);