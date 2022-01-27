const button=document.querySelector(".btn");
const name=document.querySelector("#name");
const actorName=document.querySelector("#actor");
const year=document.querySelector("#year");


button.addEventListener("click",function(e){
    e.preventDefault()
    if(name.value=='' && actorName.value=='' &&year.value==''){
        alert("please fill the form!!!");
    }
    else{
        const newRow=document.createElement("tr");

        //1st title
        const newTitle=document.createElement("th");
        newTitle.innerHTML=name.value
        newRow.appendChild(newTitle)
        
        //2nd title
        const newActor=document.createElement("th");
        newActor.innerHTML=actorName.value
        newRow.appendChild(newActor)
        
        //3rd title
        const newYear=document.createElement("th");
        newYear.innerHTML=year.value
        newRow.appendChild(newYear)

        const bookList=document.querySelector("#book-list")
        bookList.appendChild(newRow)
    }

})
