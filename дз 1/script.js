$(function () {
    let r, g, b;
    $('.circle').on('click', function () {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
            $('.circle').animate({
                top: Math.round(Math.random() * window.innerHeight),
                left: Math.round(Math.random() * window.innerWidth),
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                height: Math.round(Math.random() * (window.innerHeight)/4),
                width: Math.round(Math.random() * (window.innerWidth)/4)
            }, 2000, 'easeInBack')
    })
})