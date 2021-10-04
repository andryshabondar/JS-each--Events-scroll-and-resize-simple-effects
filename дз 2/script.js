$(function(){
    let r, g, b;
    setInterval( (function () {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
             $('.disco').animate({
                top: Math.round(Math.random() * window.innerHeight/1.5),
                left: Math.round(Math.random() * window.innerWidth/1.5),
                backgroundColor : `rgb(${r}, ${g}, ${b})`,
                boxShadow: `0 0 20px 0 rgb(${r}, ${g}, ${b})`
            },2000, 'easeInBack')
    }))
})