$(document).ready(function () {
    window.addEventListener('online', () => messageAlert("", "", "online"));
    window.addEventListener('offline', () => messageAlert("", "", "offline"));
});

//Default Toastr Notification Settings
toastr.options = {
    'closeButton': true,
    'debug': false,
    'newestOnTop': true,
    'progressBar': false,
    'positionClass': 'toast-top-right',
    'preventDuplicates': false,
    'showDuration': '1000',
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut',
}


function messageAlert(message, title, status) {

    if (status == "success") {
        toastr.success(message, title);
    } else if (status == "error") {
        toastr.error(message, title);
    } else if (status == "warning") {
        toastr.warning(message, title);
    } else if (status == "online") {
        toastr.success("Connection Restored");
    } else if (status == "offline") {
        toastr.options.positionClass = 'toast-bottom-center';
        toastr.warning("Connection Lost");
    } else {
        toastr.options.positionClass = 'toast-bottom-center';
        toastr.warning("Unknown Message. Please check the code.");
    }
}

messageAlert("Email was sent successfully!", "", "success");