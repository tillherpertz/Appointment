// Define timeline verts height by appointments that are displayed

// Height between start entry and last entry
const appointmentHeight = $('.app-entry').outerHeight() * (($('.app-entry').length + 2.5));

// Sets height
$('.timeline-vert').css('height', appointmentHeight);
