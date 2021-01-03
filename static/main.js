document.addEventListener("mousemove", function(e){

    const tree = document.querySelector('.tree');
    const text = document.querySelector('.intro');
    const bg = document.querySelector('.bg');

    // bg.style.width = 100 + e.pageX/700 + '%';
    // bg.style.transform = 'translateX(' + e.pageX/100 + ')';
    // bg.style.height = 100 + e.pageX/100 + '%';

    tree.style.right = 100 + e.pageX/2 + 'px';

    text.style.left = 100 + e.pageX/2 + 'px';
})