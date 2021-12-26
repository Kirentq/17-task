// 1. Select all buttons
const btns = document.querySelectorAll(".btn");

// 2. Select all items
const items = document.querySelectorAll(".item");

// 3.1. AddEventListener for each button in selected buttons
btns.forEach((elem)=>{
    elem.addEventListener('click', function(e){
        let filter = e.target.dataset.filter;
        items.forEach((item)=>{
            if(filter === "all"){
                item.style.display = "block";
            }else{
                if(filter === item.dataset.filter){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            }
        })
    })
})
// 3.2. Add filter for each item by e.target.dataset 

