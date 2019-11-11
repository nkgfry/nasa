const populateCollage = (numEl) => {
  let collageDisplay = document.querySelector('.collage-display');
  let HTMLsnippet = 
  `<div class="detail-view-wrapper">
    <div class="img-wrapper">
      <img src ="img-hd.jpg">
    </div>
    <div class="img-description">
    </div>
  </div>`

  let HTMLstr = '';
  for (let i = 0; i < numEl; i++) {
    HTMLstr += HTMLsnippet;
  }

  collageDisplay.innerHTML = HTMLstr;
}

window.addEventListener('load', function onLoad() {
  populateCollage(12);
})