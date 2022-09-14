$(document).ready(function () {
  $.validator.setDefaults({
    debug: true,
    success: "valid",
  });

  $("#myForm").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      telepon: {
        required: true,
        minlength: 12,
      },
    },
    messages: {
      email: {
        required: "masukkan email",
        email: "masukkan Email yang benar",
      },
      telepon: {
        required: "masukan Nomer Telepon yang benar",
        minlength: "masukan setidaknya 12 angka  ",
      },
    },
    errorElement: "span",
    errorPlacement: function (error, element) {
      error.addClass("invalid-feedback");
      element.closest(".form-group").append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass("is-invalid");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass("is-invalid");
    },
  });
});
