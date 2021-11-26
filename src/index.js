import getQuotes from './components/getQuotes'
import getImage from './components/playground'
import './css/main.css';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver'

getQuotes();
getImage()

const imgNxtBtn = document.querySelector('.btn1')
imgNxtBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    getImage();
})

const quoteNxtBtn = document.querySelector('.btn2')
quoteNxtBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    getQuotes();
})

const imgSave = document.querySelector('.btn3')
imgSave.addEventListener('click',(e)=>{
    e.preventDefault();
    domtoimage.toBlob(document.querySelector('.playground'))
    .then(function (blob) {
        const playground = document.querySelector('.playground')
        let name = playground.innerText;
        name = name.slice(0,3)        
        window.saveAs(blob, `${name}.png`);
    });
})

const btns = document.querySelectorAll('.btn')
btns.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('mouseover',()=>{
        btn.classList.add('rainbow')
    })
    btn.addEventListener('mouseout',()=>{
        btn.classList.remove('rainbow')
    })
})