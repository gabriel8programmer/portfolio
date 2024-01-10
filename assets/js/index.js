
//elements here
const $tecnologies = document.querySelectorAll("#tecnologies .tecnology");
const $tecnologiesDescription = document.querySelectorAll("#description-tecnology li");

//functions here
const hideAllElements = (elements)=> {
    // scan all the list descriptions
    elements.forEach(element => {
        //add in all elements the class hide
        element.classList.add("hide");
    });
}

const showResults = (indexTec)=> {

    //hide all descriptions
    hideAllElements($tecnologiesDescription);
     
    //remove class somely in the item selected in the moment
    $tecnologiesDescription[indexTec].classList.remove("hide");
}

//manilation events here
$tecnologies.forEach(($tecnology, $indexTec) => {
    $tecnology.addEventListener("mouseover", () => {
        showResults($indexTec+1);
    });
});

$tecnologies.forEach(($tecnology) => {
    $tecnology.addEventListener("mouseout", () => {
        showResults(0);
    });
});