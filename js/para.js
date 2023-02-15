var layer1 = document.getElementById('layer1')
scroll = window.pageXOffset;
document.addEventListener('scroll',
    function (e) {
        var offset = window.pageYOffset;
        scroll = offset;
        layer1.style.width = (40 + scroll) + '%';


    });
var layer2 = document.getElementById('layer2')
scroll = window.pageXOffset;
document.addEventListener('scroll',
    function function_name(e) {
        var offset = window.pageYOffset;
        scroll = offset;
        layer2.style.width = (25 + scroll) + '%';
        layer2.style.left = - scroll / 5 + '%';


    });
    var layer3 = document.getElementById('layer3')
scroll = window.pageXOffset;
document.addEventListener('scroll',
    function function_name(e) {
        var offset = window.pageYOffset;
        scroll = offset;
        layer3.style.width = (50 + scroll) + '%';
        layer3.style.right = scroll / 25 + '%';


    });
    var layer4 = document.getElementById('layer4')
scroll = window.pageXOffset;
document.addEventListener('scroll',
    function function_name(e) {
        var offset = window.pageYOffset;
        scroll = offset;
        layer4.style.width = (30 + scroll) + '%';
        layer4.style.right = scroll / 15 + '%';


    });
var text = document.getElementById('text')
scroll = window.pageXOffset;
document.addEventListener('scroll',
    function function_name(e) {
        var offset = window.pageYOffset;
        scroll = offset;
        text.style.width = (35 + scroll) + '%';
        text.style.top =  scroll / 10 + '%';
        layer3.style.right = scroll / 25 + '%';

    });
