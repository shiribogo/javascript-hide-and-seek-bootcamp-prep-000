function getFirstSelector(selector) {
  const select = document.querySelector(selector);
  return select
}

function nestedTarget() {
  const nest = document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (parseInt(upRank[i].innerHTML) + n)
}
}

function deepestChild(array, criteria) {
  let dig = document.getElementById('grand-node')
  let digDeeper= dig.children[0]
  while(current){
    if()
  }
  for (let i = 0; i < dig.length; i++) {
  lis[i].innerHTML = (i + n)
}
