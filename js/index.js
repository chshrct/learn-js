let imgWithData = document.querySelectorAll('[data-src]')

const changeSrc = ()=> {
    for (let img of imgWithData){
        console.log(img.getBoundingClientRect().top,document.documentElement.scrollTop+document.documentElement.clientHeight);
        if(img.getBoundingClientRect().top<document.documentElement.scrollTop+document.documentElement.clientHeight){
            img.src = img.dataset.src
        }
    }
}

changeSrc()
window.addEventListener('scroll',changeSrc)