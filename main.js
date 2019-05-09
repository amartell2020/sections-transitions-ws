let sects = document.getElementsByTagName('section')
sects[0].style.backgroundColor = '#227093'
sects[1].style.backgroundColor = '#2c2c54'
sects[2].style.backgroundColor = '#b33939'
sects[3].style.backgroundColor = '#ff793f'


window.addEventListener('scroll', function() {
  let ds = document.getElementsByClassName('divy')
  if(window.scrollY >= 1) {
    ds[0].classList.remove('hidden')
    ds[0].classList.add('show')
  }
  if(window.scrollY >= 800) {
    ds[1].classList.remove('hidden')
    ds[1].classList.add('show')
  }
  if(window.scrollY >= 1600) {
    ds[2].classList.remove('hidden')
    ds[2].classList.add('show')
  }
  if(window.scrollY >= 2400) {
    ds[3].classList.remove('hidden')
    ds[3].classList.add('show')
  }
})
