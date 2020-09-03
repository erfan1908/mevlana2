
function go_right(el, step, lim, pos, i) {

    if (pos[i] > -lim) {
        pos[i] -= step;
        el.style.right = pos[i] + "%";
    }
    // else if (pos[i] == -lim) {
    //     pos[i] = 0;
    //     el.style.right = 0 + "%";
    // }
}


function go_left(el, step, lim, pos, i) {

    if (pos[i] < 0) {
        pos[i] += step;
        el.style.right = pos[i] + "%";
    }
    else if (pos[i] == lim) {
        pos[i] = 0;
        el.style.right = 0 + "%";
    }
}


// function go_left(el, step, pos, i) {
//
//     if (pos[i] < 0) {
//         pos[i] += step;
//         el.style.right = pos[i] + "%";
//     }
//
// }




// function move(i) {
//     flag[0] = -100 * i;
//     gal.style.left = flag[0] + "%";
// }




/*-------------*/
// window.onscroll = function () {
//
//     if (window.pageYOffset > 200) {
//         menu.className = "mob";
//     }
//     else {
//         menu.className = "";
//     }
//
// }

flag = [0, 0, 0, 0, 0];

// setInterval(" go_left(gal,100,200,flag,0)", 2000);

