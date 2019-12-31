var data;
document.querySelector('.image').addEventListener('change', function() {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
        data = reader.result;
        document.getElementById('output').src = data;
        document.getElementById('output').style.width = "1000px";
        document.getElementById('output').style.height = "600px";
        /* */
        document.getElementById('output1').src = data;
        document.getElementById('output1').style.width = "100px";
        document.getElementById('output1').style.height = "100px";
        /* */
        document.getElementById('output2').src = data;
        document.getElementById('output2').style.width = "100px";
        document.getElementById('output2').style.height = "100px";
        /* */
        document.getElementById('output3').src = data;
        document.getElementById('output3').style.width = "100px";
        document.getElementById('output3').style.height = "100px";
        /** */
        document.getElementById('output4').src = data;
        document.getElementById('output4').style.width = "100px";
        document.getElementById('output4').style.height = "100px";
        /** */
        document.getElementById('output5').src = data;
        document.getElementById('output5').style.width = "100px";
        document.getElementById('output5').style.height = "100px";
        /** */
        document.getElementById('output6').src = data;
        document.getElementById('output6').style.width = "100px";
        document.getElementById('output6').style.height = "100px";
    };
    reader.readAsDataURL(input.files[0]);
});

function bright(val) {
    document.querySelector('#output').style.filter = "brightness(" + val + "%)";
}

function f2(val) {
    document.querySelector('#output').style.filter = "contrast(" + val + "%)";
}

function f3(val) {
    document.querySelector('#output').style.filter = "saturate(" + val + ")";
}

function f4(val) {
    var num1 = 1000 + (val * 12);
    var num2 = 600 + (val * 5);
    document.querySelector('#output').style.width = "" + num1 + "px";
    document.querySelector('#output').style.height = "" + num2 + "px";
}

function f5(val) {
    document.querySelector('#output').style.filter = "grayscale(" + val + "%)";
}

function f6(val) {
    var num1 = 1000 - (val * 5);
    var num2 = 600 - (val * 2);
    document.querySelector('#output').style.width = "" + num1 + "px";
    document.querySelector('#output').style.height = "" + num2 + "px";
}
var deg1 = 0,
    deg2 = 0;
document.querySelector('.bn1').addEventListener('click', function() {
    deg1 += 90;
    document.querySelector('#output').style.transform = "rotate(" + deg1 + "deg)";
});
document.querySelector('.bn2').addEventListener('click', function() {
    deg2 -= 90;
    document.querySelector('#output').style.transform = "rotate(" + deg2 + "deg)";
});
document.querySelector('.bn3').addEventListener('click', function() {
    document.querySelector('#output').style.filter = "none";
    document.querySelector('#output').style.transform = "rotate(0deg)";
    document.querySelector('.range1').value = '0';
    document.querySelector('.range2').value = '0';
    document.querySelector('.range3').value = '0';
    document.querySelector('.range4').value = '0';
    document.querySelector('.range5').value = '0';
    document.querySelector('.range6').value = '0';
    document.querySelector('#output').style.width = "1000px";
    document.querySelector('#output').style.height = "600px";
});
document.querySelector('#output1').addEventListener('click', function() {
    document.querySelector('#output').style.filter = "none";
    document.querySelector('#output').style.transform = "rotate(0deg)";
    document.querySelector('.range1').value = '0';
    document.querySelector('.range2').value = '0';
    document.querySelector('.range3').value = '0';
    document.querySelector('.range4').value = '0';
    document.querySelector('.range5').value = '0';
    document.querySelector('.range6').value = '0';
    document.querySelector('#output').style.filter = "grayscale(100%) contrast(200%)";
});
document.querySelector('#output2').addEventListener('click', function() {
    document.querySelector('#output').style.filter = "none";
    document.querySelector('#output').style.transform = "rotate(0deg)";
    document.querySelector('.range1').value = '0';
    document.querySelector('.range2').value = '0';
    document.querySelector('.range3').value = '0';
    document.querySelector('.range4').value = '0';
    document.querySelector('.range5').value = '0';
    document.querySelector('.range6').value = '0';
    document.querySelector('#output').style.filter = "hue-rotate(90deg)";
});
document.querySelector('#output3').addEventListener('click', function() {
    document.querySelector('#output').style.filter = "none";
    document.querySelector('#output').style.transform = "rotate(0deg)";
    document.querySelector('.range1').value = '0';
    document.querySelector('.range2').value = '0';
    document.querySelector('.range3').value = '0';
    document.querySelector('.range4').value = '0';
    document.querySelector('.range5').value = '0';
    document.querySelector('.range6').value = '0';
    document.querySelector('#output').style.filter = "invert(100%)";
});
document.querySelector('#output4').addEventListener('click', function() {
    document.querySelector('#output').style.filter = "none";
    document.querySelector('#output').style.transform = "rotate(0deg)";
    document.querySelector('.range1').value = '0';
    document.querySelector('.range2').value = '0';
    document.querySelector('.range3').value = '0';
    document.querySelector('.range4').value = '0';
    document.querySelector('.range5').value = '0';
    document.querySelector('.range6').value = '0';
    document.querySelector('#output').style.filter = "saturate(8)";
});
document.querySelector('#output5').addEventListener('click', function() {
    document.querySelector('#output').style.filter = "none";
    document.querySelector('#output').style.transform = "rotate(0deg)";
    document.querySelector('.range1').value = '0';
    document.querySelector('.range2').value = '0';
    document.querySelector('.range3').value = '0';
    document.querySelector('.range4').value = '0';
    document.querySelector('.range5').value = '0';
    document.querySelector('.range6').value = '0';
    document.querySelector('#output').style.filter = "sepia(100%)";
});
document.querySelector('#output6').addEventListener('click', function() {
    document.querySelector('#output').style.filter = "none";
    document.querySelector('#output').style.transform = "rotate(0deg)";
    document.querySelector('.range1').value = '0';
    document.querySelector('.range2').value = '0';
    document.querySelector('.range3').value = '0';
    document.querySelector('.range4').value = '0';
    document.querySelector('.range5').value = '0';
    document.querySelector('.range6').value = '0';
    document.querySelector('#output').style.filter = "contrast(200%) brightness(150%)";
});