window.onload = function() {
    const ham_button = document.querySelector('.hamburger');
    const get = document.querySelector(".navbar");
  
    ham_button.addEventListener('click', function (){
      ham_button.classList.toggle('is-active');
      get.classList.toggle('is-active');
    });
  };

function downloadCV() {
  const url = "documents/CV_Ariston_CHRISTODOULOU_2026.pdf"
  const a = document.createElement('a')
  a.href = url
  a.download = url.split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

const btn = document.getElementById('download-btn');
let timeoutId;

btn.addEventListener('click', () => {
    btn.classList.add('clicked');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        btn.classList.remove('clicked');
    }, 500);
});
