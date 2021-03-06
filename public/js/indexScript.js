$(document).ready(() => {
  console.log('dom loaded!');

  const signup = $('.signup');
  const login  = $('.login');
  const createAcct = $('#createAcct');
  const goBack = $('#goBack');

  $('.closeModal').on('click', () => {
    $('.tutorialModal').toggleClass('finished');
  });

  // hide signup
  signup.hide();

  createAcct.on('click', () => {
    login.fadeOut('slow');
    signup.fadeIn('slow');
  });

  goBack.on('click', () => {
    signup.fadeOut('slow');
    login.fadeIn('slow');
  });
});
