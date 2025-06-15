
function login() {
  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  if (name && email) {
    document.getElementById('loginBox').classList.add('hidden');
    document.getElementById('servicesBox').classList.remove('hidden');
  } else {
    alert('من فضلك أدخل الاسم والبريد الإلكتروني');
  }
}

document.getElementById('requestForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value;
  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  const subject = `طلب خدمة: ${service}`;
  const body = `الاسم: ${name}\nالإيميل: ${email}\nالخدمة: ${service}\nتفاصيل إضافية: ${details}`;

  const mailto = `mailto:ahmedehe163@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});
