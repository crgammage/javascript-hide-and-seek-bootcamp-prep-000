function getFirstSelector(selector) {
return document.querySelector(selector)
}

function nestedTarget() {
  document.getElementsById('nested').querySelector('div.target')
}
