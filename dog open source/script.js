var listElm = document.querySelector('#infinite-list');

 //Add 20 items;

 var nextItem = 1;
 var loadΜore = function(){
    for(var i = 0; i < 20; i++){
        var item = document.createElement('li');
        item.innerText = 'item ' + nextItem++;
        listenElm.appendChild(item);

    }
 }

 //Detect when scrolled to bottom
 
 listElm.addEventListener('scroll',function(){
    if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight){
        //When user scroll to bottom then it will add more
        loadMore();
    }
});

 //initially load some items

 loadMore();