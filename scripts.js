let btnn = document.querySelector('#chn');
btnn.addEventListener('click',change)
function change(){
    let nam = document.querySelector('#nameinp').value;
    let desig = document.querySelector('#rolinp').value;
    let ins = document.querySelector('#insinp').value;
    let exp=document.querySelector('#expinp').value;
    let fname = document.querySelector('.haris');
    let fcour = document.querySelector('.cour');
    let f1cour = document.querySelector('.cour1');
    let fexp = document.querySelector('#exp');
    fexp.innerHTML=exp;


    let fins = document.querySelector('#ins');
    console.log(nam);
    console.log(desig);
    console.log(ins);
    f1cour.innerHTML=desig
    fins.innerHTML=ins;


    fcour.innerHTML=desig;


    fname.innerHTML=nam;
    localStorage.setItem('name',nam)
localStorage.setItem('role',desig)
localStorage.setItem('ins',ins)

}
let deggbtn = document.getElementById('degbtn')
deggbtn.addEventListener('click',chnn)
function chnn(){
    let pg = document.querySelector('#pginp').value;
    let ug = document.querySelector('#uginp').value;
    let ugg = document.querySelector('.ugg');
    let pgg=document.querySelector('.pgg');
    ugg.innerHTML=ug;
    pgg.innerHTML=pg;
    localStorage.setItem('Pg Degree',pg)
    localStorage.setItem('Ug Degree',ug)
}
let prrbtn=document.querySelector('#probtn')
prrbtn.addEventListener('click',prochn)
function prochn(){
    let pro1headip = document.querySelector('#pro1').value;
    let pro2headip = document.querySelector('#pro2').value;
    let pro3headip = document.querySelector('#pro3').value;
    let pro1desip=document.querySelector('#pro1des').value;
    let pro2desip=document.querySelector('#pro2des').value;
    let pro3desip=document.querySelector('#pro3des').value;
    let a = document.querySelector('.pro1head')
    let a1 = document.querySelector('.pro2head')
    let a2 = document.querySelector('.pro3head')
    let b = document.querySelector('.pro1des');
    let b1 = document.querySelector('.pro2des');
    let b2 = document.querySelector('.pro3des');
    a.innerHTML=pro1headip;
    a1.innerHTML=pro2headip;
    a2.innerHTML=pro3headip;
    b.innerHTML=pro1desip;
    b1.innerHTML=pro2desip;
    b2.innerHTML=pro3desip;
    localStorage.setItem('Project 1',pro1headip)
    localStorage.setItem('Project 2',pro2headip)
    localStorage.setItem('Project 3 ',pro3headip)
}
let clrbtn = document.querySelector('#clrchn')
clrbtn.addEventListener('click',clrchnage)
i=0;
function clrchnage(){
let eduu =  document.querySelector('#eddu')
let arr = ['red','blue','green','yellow','purple'];
if(i>4){
    i=0
}
eduu.style.color=arr[i]
i+=1
}
let clr1btn = document.querySelector('#clrchn2')
clr1btn.addEventListener('click',clrchnage1)
i=0;
function clrchnage1(){
let eduu =  document.querySelector('#prr2')
let arr = ['red','blue','green','yellow','purple'];
if(i>4){
    i=0
}
prr2.style.color=arr[i]
i+=1
}




