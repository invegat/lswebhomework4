let body = document.getElementsByTagName('body')[0]
Object.assign(body.style, {background: 'red',fontfamily: 'sans-serif'})
Object.assign(document.getElementsByTagName('h1')[0].style, {background: 'blue'})
document.getElementById('nickname').innerHTML = 'marko'
document.getElementById('favorites').innerHTML = '<h1 style="display: inline">react + javascript!</h1>'
document.getElementById('hometown').innerHTML = 'San Diego'
let lis = document.getElementsByTagName('ul')[0].children
for (let i = 0;i<lis.length;i++) {
    if (lis[i].tagName==='LI') {
        lis[i].className = 'listitem'
    }
}

let listItems = document.getElementsByClassName('listitem');
for (let i = 0;i<listItems.length;i++) {
    if (listItems[i].tagName==='LI') {
        Object.assign(listItems[i].style, {color: 'red', background: 'white'})
    }
}
let p = document.createElement('img')
p.src = "Mark Oliver.jpg"
//Object.assign(p.style, {transform: rotate('90deg')})
p.width = 306
p.height = 408
body.appendChild(p)
