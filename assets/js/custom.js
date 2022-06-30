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
        toastr.options.positionClass = 'toast-top-right';
        toastr.success(message, title);
    } else if (status == "error") {
        toastr.options.positionClass = 'toast-top-right';
        toastr.error(message, title);
    } else if (status == "warning") {
        toastr.options.positionClass = 'toast-top-right';
        toastr.warning(message, title);
    } else if (status == "online") {
        toastr.options.positionClass = 'toast-bottom-center';
        toastr.success("Connection Restored");
    } else if (status == "offline") {
        toastr.options.positionClass = 'toast-bottom-center';
        toastr.warning("Connection Lost");
    } else {
        toastr.options.positionClass = 'toast-bottom-center';
        toastr.warning("Unknown Message. Please check the code.");
    }
}

function contactUsForm() {

    var data = $("#contactUs-form").serialize() + "&contactMessage=true";
    ajaxRequestSender("POST", "controller-mailer", data);
}

function ajaxRequestSender(METHOD, URL, DATA) {
    $.ajax({
        type: METHOD,
        url: URL,
        data: DATA,
        dataType: "JSON",
        beforeSend: function () {
            progressBarToggle(true);
        },
        success: function (feedback) {
            if (feedback.status == 1) {
                document.getElementById("contactUs-form").reset();
                messageAlert("Email was sent successfully!", null, "success");
            } else {
                messageAlert("Message was not delivered !. Try Again Later.", null, "error");
            }
            progressBarToggle(false);
        },
        error: function (error) {
            errorDisplay(error);
            progressBarToggle(false);
        },
    });
}

function errorDisplay(error) {
    console.log(error);
    messageAlert(error, "Error occurred !", "error");
}

function progressBarToggle(state) {
    var loader = document.getElementById("page_loader");
    if (state == true) {
        loader.style.display = "block";
    } else {
        loader.style.display = "none";

    }
}
