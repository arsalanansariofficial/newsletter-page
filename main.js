let confirmationTimeout;
const feedback = document.querySelector('.feedback');
const newsLetter = document.querySelector('.newsletter');
const closeButton = document.querySelectorAll('.btn-primary')[1];
const newsletterForm = document.querySelector('.newsletter_form');
const validationLabel = document.querySelector('.form-control_label > span');
const emailInput = document.querySelector(
  '.form-control:nth-of-type(1) > input'
);

function closeConfimation() {
  feedback.classList.remove('d-flex');
  feedback.classList.add('d-none');
  newsLetter.classList.remove('d-none');
  newsLetter.classList.add('d-flex');
  clearTimeout(confirmationTimeout);
}

closeButton.addEventListener('click', closeConfimation);

emailInput.addEventListener('input', function () {
  validationLabel.classList.remove('d-block');
  validationLabel.classList.add('d-none');
});

newsletterForm.addEventListener('submit', function (event) {
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;

  event.preventDefault();

  if (!emailRegex.test(email)) {
    validationLabel.classList.remove('d-none');
    return validationLabel.classList.add('d-block');
  }

  newsLetter.classList.add('d-none');
  feedback.classList.remove('d-none');
  feedback.classList.add('d-flex');

  confirmationTimeout = setTimeout(closeConfimation, 3000);
});
