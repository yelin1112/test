function viewPlace(){
    let tagArray = document.getElementsByClassName("place");
    for(let i=0; i<tagArray.length;i++){
        let tag=tagArray[i]
        if(tag.style.color!=="blue"){
            tag.style.color="blue"
            tag.style.fontSize="20px"
        }
        else{
            tag.style.color="black"
            tag.style.fontSize="16px"
        }
    }
}

function viewFood(){
    let tagArray = document.getElementsByClassName("Food");
    for(let i=0; i<tagArray.length;i++){
        let tag=tagArray[i]
        if(tag.style.color!=="red"){
            tag.style.color="red"
            tag.style.fontSize="20px"
        }
        else{
            tag.style.color="black"
            tag.style.fontSize="16px"
        }
    }
}