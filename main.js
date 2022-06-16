const colors=document.getElementById('colors')

fetch('colors.json')
.then(res=>res.json())
.then(data=>{
  for(let item of data){
    const color=document.createElement('div')
    color.innerHTML=item.code;
    color.classList.add('color');
    color.style.backgroundColor=item.code
    color.setAttribute('data-clipboard-text',item.code)
    colors.appendChild(color)
    
  }
})





var clipboard = new ClipboardJS('.color');

clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
const old=e.text.innerHTML
e.trigger.innerHTML='Copied';
setTimeout(e.trigger.innerHTML=e.trigger.innerHTML,9000)
  e.clearSelection();
});

clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});
