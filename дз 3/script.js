
    $('.box').click(function () {
        $(this).css('opacity', 0);
        $(this).attr('data-current-item', 'true');

        $('.modal').css({
            width: $(this).width(),
            height: $(this).height(),
            top: $(this).offset().top,
            left: $(this).offset().left,
            background: $(this).css('background')
        });
        $('.container').fadeIn(0, function () {
            $('.modal').css('opacity', 1)
            let mWidth = $('.modal').width();
            let mHeigth = $('.modal').height();
            let newTop = (window.innerHeight - 400) / 2;
            let newLeft = (window.innerWidth - 400) / 2;
            $('.modal').animate({
                width: '400px',
                height: '400px',
                top: newTop,
                left: newLeft
            }, 1000, 'linear')
        })
    });

    $('.modal').on('click', function () {
        let currentItem = $('.box[data-current-item="true"]');
        let width = currentItem.width();
        let heigth = currentItem.height();
        let left = currentItem.offset().left;
        let top = currentItem.offset().top;
        $(this).animate({
            width: width,
            height: heigth,
            top: top,
            left: left
        }, 1000, 'linear', () => {
            $('.box[data-current-item="true"]').css('opacity', '1');
            $('.container').fadeOut(500);
            currentItem.removeAttr('data-current-item');
        })
    })


// $(function () {
//     $('.box').on('click', function () {
//         let lastBox = $(this).last();
//         const offset = lastBox.offset();

//         let wrap = $('.wrapper');
//         let box = $('.box');

//         $('.container').animate({
//             backgroundColor: 'rgba(0, 0, 0, 0.582)',
//         }, 1000)
//         $(this).css('z-index', '4')
//         $(this).animate({
//             top: (window.innerHeight - 500) / 2,
//             left: (window.innerWidth - box.width() - wrap.width()) / 2,
//             width: '400px',
//             height: '400px',
//         }, 1000, function () {
//             let currentItem = $('.box[data-current-item="true"]');
//             let width = currentItem.width();
//             let heigth = currentItem.height();
//             let left = currentItem.offset().left;
//             let top = currentItem.offset().top;
//             $(this).animate({
//                 width: width,
//                 height: heigth,
//                 top: top,
//                 left: left
//             }, 1000, 'linear', () => {
//                 $('.box[data-current-item="true"]').css('opacity', '1');
//                 $('.modal-container').fadeOut(500);
//                 currentItem.removeAttr('data-current-item');
//             })
//         })
//     })
// })