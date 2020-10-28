$(`#login-show`).click(function(){
  $(`#login-modal`).fadeIn();
});

$(`#signup-show`).click(function(){
  $(`#signup-modal`).fadeIn();
});

$(`.close-form`).click(function(){
  $(`#login-modal`).fadeOut();
  $(`#signup-modal`).fadeOut();
});
