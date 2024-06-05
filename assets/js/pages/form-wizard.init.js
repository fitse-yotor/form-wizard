$(function(){
    $("#basic-example").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slide"
    });

    $("#vertical-example").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slide",
        stepsOrientation: "vertical"
    });
    
});
function calculateTotalCapital() {
    var building = parseFloat(document.getElementById('basicpill-building-input').value) || 0;
    var tools = parseFloat(document.getElementById('basicpill-tools-input').value) || 0;
    var car = parseFloat(document.getElementById('basicpill-car-input').value) || 0;
    var furniture = parseFloat(document.getElementById('basicpill-furniture-input').value) || 0;
    var otherCapital = parseFloat(document.getElementById('basicpill-other-capital-input').value) || 0;
    var startupCost = parseFloat(document.getElementById('basicpill-startup-cost-input').value) || 0;

    var totalCapital = building + tools + car + furniture + otherCapital + startupCost;
    document.getElementById('basicpill-total-capital-input').value = totalCapital.toFixed(2);
}

function calculateTotalCapital() {
    var building = parseFloat(document.getElementById('basicpill-building-input').value) || 0;
    var tools = parseFloat(document.getElementById('basicpill-tools-input').value) || 0;
    var car = parseFloat(document.getElementById('basicpill-car-input').value) || 0;
    var furniture = parseFloat(document.getElementById('basicpill-furniture-input').value) || 0;
    var otherCapital = parseFloat(document.getElementById('basicpill-other-capital-input').value) || 0;
    var startupCost = parseFloat(document.getElementById('basicpill-startup-cost-input').value) || 0;

    var totalCapital = building + tools + car + furniture + otherCapital + startupCost;
    document.getElementById('basicpill-total-capital-input').value = totalCapital.toFixed(2);
}

// Event listeners to recalculate total capital on input change
var inputs = document.querySelectorAll('#company-document-form input[type="number"]');
inputs.forEach(function(input) {
    input.addEventListener('input', calculateTotalCapital);
});

// Call the function initially to set the initial total capital value
calculateTotalCapital();
document.addEventListener('input', function() {
    const permMale = document.getElementById('permanent-male-employees').value || 0;
    const permFemale = document.getElementById('permanent-female-employees').value || 0;
    const contractMale = document.getElementById('contract-male-employees').value || 0;
    const contractFemale = document.getElementById('contract-female-employees').value || 0;

    const totalEmployees = parseInt(permMale) + parseInt(permFemale);
    document.getElementById('total-employees').value = totalEmployees;

    const totalContractEmployees = parseInt(contractMale) + parseInt(contractFemale);
    document.getElementById('total-contract-employees').value = totalContractEmployees;
});