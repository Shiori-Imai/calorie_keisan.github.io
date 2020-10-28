$(`#login-show`).click(function(){
  $(`#login-modal`).fadeIn();
});

$(`.shinki`).click(function(){
  $(`#signup-modal`).fadeIn();
});

$(`.close-form`).click(function(){
  $(`#login-modal`).fadeOut();
  $(`#signup-modal`).fadeOut();
});
