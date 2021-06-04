export default function () {
  const pills = document.getElementById('nav-pills')
  const wrapper = document.getElementById('tabs-wrapper')
  pills.scrollIntoView()
  window.scrollTo({
    top: wrapper.offsetTop - pills.offsetHeight,
    behavior: 'smooth'
  })
}
