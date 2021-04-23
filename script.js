//nav bar
const menuIcon = document.querySelector(".hamburger-menu");
const navbar=document.querySelector(".navbar");
menuIcon.addEventListener('click',()=>{
    navbar.classList.toggle("change");
    //schimba din x in hamburger
});

//list

const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list ');

let draggedItem = null;

for(let i = 0; i < list_items.length; i++){
    const item = list_items[i];
    // console.log('Lista nr '+ i);

    //each item
    item.addEventListener('dragstart', function(){
        console.log('dragstart');
        draggedItem = this;
        // setTimeout(function(){
        //     this.style.display='none';
        // },0)
        
    });
    item.addEventListener('dragend', function(){
        console.log('dragend');
        setTimeout(function(){
            draggedItem.style.display='block';
            draggedItem=null;
        })
    })
    for(let j = 0; j < lists.length; j++){
        const list = lists[j];

        list.addEventListener('drop',function(){
            this.append(draggedItem);
        });
        
        // console.log('Nr item ' + j); 
    }
}
