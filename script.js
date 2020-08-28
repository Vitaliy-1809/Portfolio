$(function(){

// Запрет скролла:
    function disableScroll() {
        $('html, body').css('overflow','hidden');
    }

// Восстановление скролла:
    function enableScroll() {
        $('html, body').css('overflow','visible');
    }

//Плавающая кнопка "наверх":
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({opacity : 1}).fadeIn('slow');
            }
        } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
    });
    $('#upbutton').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });
    
// Всплывающие контейнеры (при нажатии на кнопки):
    // Контейнер №1
    $('.header-button-1, .header-button-1_1, .footer-button').click(function(){
        $('#popup-container').fadeIn(400, disableScroll); // Так он будет только появляться (просто появление - .show(), fadeIn(400) - анимация (плавное появление через 400 м/с)
        $('#popup').animate({
            width: '320px',
            height: '400px'
        }, 400); // разворачивание с 0 до заданного размера (одновременное появление и разворачивание за 400 м/с)
    });
    // чтобы он еще и скрывался, когда нажимаешь мышкой в области экрана вне контейнера, нужно прописать:
   
    $('#popup-container').click(function(event) {
        if(event.target == this) {
            $(this).fadeOut(400, enableScroll); // (просто скрыть - .hide(), fadeOut() - анимация (плавное исчезновение через 400 м/с - значение по умолчанию)
            $('#popup').animate({
                width: 0,
                height: 0
            }, 400); // сворачивание в 0
        }
    });

    $('#addCase').on('click', function() { // при нажатии на кнопку
        let one_val = $('#input-one').val().trim(); // из инпута мы получим значение поля, через функцию .val(), а через .trim() удалим лишние пробелы вначале и в конце
        let two_val = $('#input-two').val().trim(); // то же самое с этим полем

        if (one_val.length > 0 && two_val.length > 0) { // Если поля не пустые, сворачиваем контейнер:
            $('#popup-container').fadeOut(400, enableScroll);
            $('#popup').animate({
                width: 0,
                height: 0
            }, 400);
        } else { // если пустые, то
            alert('Все поля должны быть заполнены'); // выводим сообщение
            return false;
        }
    });

    // Контейнер №2
    $('.header-button-2').click(function(){
        $('#popup-container-2').fadeIn(400, disableScroll); 
        $('#popup-2').animate({
            width: '320px',
            height: '450px'
        }, 400); 
    });
   
    $('#popup-container-2').click(function(event) {
        if(event.target == this) {
            $(this).fadeOut(400, enableScroll); 
            $('#popup-2').animate({
                width: 0,
                height: 0
            }, 400); 
        }
    });

    $('#addCase-2').on('click', function() { 
        let one_val = $('#input-one-2').val().trim(); 
        let two_val = $('#input-two-2').val().trim(); 
        let three_val = $('#input-three-2').val().trim(); 

        if (one_val.length > 0 && two_val.length > 0 && three_val.length > 0) { 
            $('#popup-container-2').fadeOut(400, enableScroll);
            $('#popup-2').animate({
                width: 0,
                height: 0
            }, 400);
        } else { 
            alert('Все поля должны быть заполнены'); 
            return false;
        }
    });

    // Контейнер №3
    $('.central-button-1').click(function(){
        $('#popup-container-3').fadeIn(400, disableScroll); 
        $('#popup-3').animate({
            width: '320px',
            height: '450px'
        }, 400); 
    });
   
    $('#popup-container-3').click(function(event) {
        if(event.target == this) {
            $(this).fadeOut(400, enableScroll); 
            $('#popup-3').animate({
                width: 0,
                height: 0
            }, 400); 
        }
    });

    $('#addCase-3').on('click', function() { 
        let one_val = $('#input-one-3').val().trim(); 
        let two_val = $('#input-two-3').val().trim(); 
        let three_val = $('#input-three-3').val().trim(); 

        if (one_val.length > 0 && two_val.length > 0 && three_val.length > 0) { 
            $('#popup-container-3').fadeOut(400, enableScroll);
            $('#popup-3').animate({
                width: 0,
                height: 0
            }, 400);
        } else { 
            alert('Все поля должны быть заполнены'); 
            return false;
        }
    });

    // Контейнер №4
    $('.central-button-2').click(function(){
        $('#popup-container-4').fadeIn(400, disableScroll); 
        $('#popup-4').animate({
            width: '320px',
            height: '450px'
        }, 400); 
    });
   
    $('#popup-container-4').click(function(event) {
        if(event.target == this) {
            $(this).fadeOut(400, enableScroll); 
            $('#popup-4').animate({
                width: 0,
                height: 0
            }, 400); 
        }
    });

    $('#addCase-4').on('click', function() {
        let one_val = $('#input-one-4').val().trim(); 
        let two_val = $('#input-two-4').val().trim(); 
        let three_val = $('#input-three-4').val().trim(); 

        if (one_val.length > 0 && two_val.length > 0 && three_val.length > 0) { 
            $('#popup-container-4').fadeOut(400, enableScroll);
            $('#popup-4').animate({
                width: 0,
                height: 0
            }, 400);
        } else { 
            alert('Все поля должны быть заполнены');
            return false;
        }
    });

// Выпадающее мобильное меню:
    $('.menu-button').click(function(){
        $('#mobile-menu').show(disableScroll); 
        $('#menu-list').animate({
            width: '320px',
            height: '200px'
        }, 400); 
    });

    $('.menu-button-2').click(function(){
        $('#mobile-menu-2').show(disableScroll); 
        $('#menu-list-2').animate({
            width: '320px',
            height: '200px'
        }, 400); 
    });

    $('.close-button').click(function(){
        $('#mobile-menu').hide(enableScroll); 
        $('#menu-list').animate({
            width: 0,
            height: 0
        }, 400);
    });

    $('.close-button-2').click(function(){
        $('#mobile-menu-2').hide(enableScroll); 
        $('#menu-list-2').animate({
            width: 0,
            height: 0
        }, 400);
    });

    $('#mobile-menu').click(function(event) {
        if(event.target == this) {
            $(this).hide(enableScroll);
            $('#menu-list').animate({
                width: 0,
                height: 0
            }, 400);
        }
    });

    $('#mobile-menu-2').click(function(event) {
        if(event.target == this) {
            $(this).hide(enableScroll);
            $('#menu-list-2').animate({
                width: 0,
                height: 0
            }, 400);
        }
    });
});

//Рисование на веб странице с помощью canvas (пример):
    // function draw() {
    //     let canvas = document.getElementById("myCanvas");
    //     let context = canvas.getContext("2d");
    //     context.beginPath();
    //     context.arc(95, 50, 40, 0, 2 * Math.PI);
    //     context.stroke();
    // }
    // document.addEventListener("DOMContentLoaded", draw);