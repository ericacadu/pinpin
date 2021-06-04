export default function () {
  const nav = document.getElementById('nav-pills')
  const target = document.getElementById('sponsor-form')
  window.scrollTo({
    top: target.offsetTop - nav.offsetHeight,
    behavior: 'smooth'
  })
}
