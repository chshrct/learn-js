const linkCollectiion = document.querySelectorAll('a');

for(link of linkCollectiion){
    if(link.getAttribute('href')!==null &&link.getAttribute('href').includes('://') && !(link.href.includes('http://internal.com'))){
        link.style.color = 'orange'
    }
}