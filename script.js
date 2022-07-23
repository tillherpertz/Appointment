// Define .timeline-verts height by appointments that are displayed

// Height between start entry and last entry
const appointmentHeight = $('.app-entry').outerHeight() * (($('.app-entry').length + 2.5));

// Sets height
$('.timeline-vert').css('height', appointmentHeight);


// Defines days per month
function getDaysPerMonth(month, year) {
    const date = new Date(Date.UTC(year, month, 1));
    const days = [];
    while (date.getUTCMonth() === month) {
        days.push(new Date(date));
        date.setUTCDate(date.getUTCDate() + 1);
    }
    return days;
}

// Fills the specific month with day links

function appendDays(month){
    $('.app-days ul').empty();
    $('.app-days').scrollLeft(2000);
    const dayArray = getDaysPerMonth(month, 2022);
    let dayCount = 0;
    dayArray.forEach(element => {
        dayCount++;
        const listIndexDay1 = '<li><a class="is-day" href="#">' + dayCount + '</a></li>';
        $('.app-days ul').append(listIndexDay1);
    });

    $('a.is-day').click( function(){
        $(this).parent().siblings().removeClass('is-active');
        $(this).parent().addClass('is-active');
    });
}

$('a.is-month').click( function(){
    $(this).parent().siblings().removeClass('is-active');
    $(this).parent().addClass('is-active');
    const mathMonth = $(this).parent().index('li');
    appendDays(mathMonth);
});


