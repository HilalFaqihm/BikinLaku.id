let tol = document.getElementById('apakek')
let apaan = document.getElementById('apaan')
let apaankek = document.getElementById('apaankek')
let iniloh = document.getElementById('iniloh')
let icon = document.getElementById('iconmenu')
let icon2 = document.getElementById('menunaik')
let icon3 = document.getElementById('menuturun')
///////////////////////////
iniloh.style.border = "none";
iniloh.style.padding = "20px";
iniloh.style.fontSize = "20px"
iniloh.style.color = 'goldenrod'
////////////////////////////
tol.style.padding = "20px";
tol.style.fontSize = "20px"
apaankek.style.display = 'none'
//////////////////////////////
icon2.style.display = 'none'
icon3.style.display = 'none'
icon.style.color = 'black'
/////
tol.addEventListener('click',function(){
    apaan.style.display = 'none'
    apaankek.style.display = 'flex'
    tol.style.color = 'goldenrod'
    iniloh.style.color = 'white'
})
iniloh.addEventListener('click',function(){
    apaan.style.display = 'flex'
    apaankek.style.display = 'none'
    iniloh.style.color = 'goldenrod'
    tol.style.color = 'white'
})
icon.addEventListener('click',function(){
    icon.style.color = 'grey'
    icon3.style.marginLeft = '58.5%'
    icon3.style.display = 'block'
    icon2.style.marginLeft = '58.5%'
    icon2.style.display = 'block'
})
icon2.addEventListener('click',function(){
    icon2.style.display = "none"
    icon.style.color = 'black'
    icon3.style.display = 'none'
})
icon3.addEventListener('click',function(){
    icon2.style.display = "none"
    icon.style.color = 'black'
    icon3.style.display = 'none'
})