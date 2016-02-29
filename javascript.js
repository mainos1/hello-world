window.addEventListener("DOMContentLoaded",function(){
    setSelector("birthregionselection","birthregion");
    setSelector("nationalityIDselection","nationalityID");
    setSelector("dimotologioregionselected","dimotologioregion");
    setSelector("mitrooregionselected","mitrooregion");
    setSelector("maritalstatusIDselected","maritalstatusID"); 
    setSelector("uregionselected","uregion");    
    setSelector("religionIDSelection","religionID");
});

function setSelector(hidden,select){
    var bh = document.getElementById(hidden).value.trim();
    bh = parseInt(bh,10);
    if(bh!=="" && !isNaN(bh)){
        var bo = document.getElementById(select);
        var r = binaryIndexOf(bo,bh);
        if(r !== -1){
            bo.options[r].selected=true;
        }
    }
}

function binaryIndexOf(Element,value) {     
    var minIndex = 0;
    var maxIndex = Element.length - 1;
    var currentIndex;
    var currentElement;
    var resultIndex;
    
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex+maxIndex)/2|0;
        currentElement = Element.options[currentIndex].value;
        currentElement = parseInt(currentElement,10);
        if (currentElement < value) {  
            minIndex = currentIndex + 1;
        }
        else if (currentElement > value) {
            maxIndex = currentIndex - 1;
        }
        else {
                return currentIndex;
        }
    }
    return -1;
}
