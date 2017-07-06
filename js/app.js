var someFun = function () {
    console.log('Király')
}

$('#line-1').text('Hello')
            .css('background-color', 'green')
            .fadeToggle('slow', someFun)
