// header burger =========================
$(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });

// lenguage drop menu ======================
$(document).ready(function() {
  $('.lang_current').click(function() {
    $('.lang_list').toggle()
  });

  $(document).mouseup(function (e) {
    if ($(e.target).closest(".lang_list").length === 0) {
      $(".lang_list").hide();
    }
  });
});