const header = document.querySelector('header')
header.classList.add('header-container')
const title = document.createElement('h1')
title.classList.add('title')
title.textContent = "The Epoch of Change"
const link = "https://png.pngtree.com/thumb_back/fh260/background/20200604/pngtree-retro-fist-revolution-struggle-mosaic-red-background-image_338028.jpg"
header.style.backgroundImage = `url(${link})`
header.style.height = header.style.backgroundImage.height
header.appendChild(title)
// header.appendChild(headerImg)
