var result = 0;

$(document).ready(function() {

    $("#button-equal").click(function() {
        calcNumber("=");
    })

    $("#button-equal").click(function() {
        calcNumber("=");
    })

    $("#button-equal").click(function() {
        calcNumber("=");
    })

    $("#button-equal").click(function() {
        calcNumber("=");
    })

    $("#button-equal").click(function() {
        calcNumber("=");
    })

    $("#button-0").click(function() {
        $("#input").val($("#input").val() + "0");
        console.log("0");
    })
    $("#button-1").click(function() {
        $("#input").val($("#input").val() + "1");
        console.log("1");
    })
    $("#button-2").click(function() {
        $("#input").val($("#input").val() + "2");
        console.log("2");
    })
    $("#button-3").click(function() {
        $("#input").val($("#input").val() + "3");
        console.log("3");
    })
    $("#button-4").click(function() {
        $("#input").val($("#input").val() + "4");
        console.log("4");
    })
    $("#button-5").click(function() {
        $("#input").val($("#input").val() + "5");
        console.log("5");
    })
    $("#button-6").click(function() {
        $("#input").val($("#input").val() + "6");
        console.log("6");
    })
    $("#button-7").click(function() {
        $("#input").val($("#input").val() + "7");
        console.log("7");
    })
    $("#button-8").click(function() {
        $("#input").val($("#input").val() + "8");
        console.log("8");
    })
    $("#button-9").click(function() {
        $("#input").val($("#input").val() + "9");
        console.log("9");
    })

});


function calcNumber(operation) {
    var input = $("#input").val();
    switch (operation) {
        case "+":
            result = result + input;
            break
        case "-":
            result = result - input;
            break
        case "*":
            result = result * input;
            break
        case "/":
            result = result / input;
            break
        case "=":
            result = input;
        default:
            console.log("Error");
    }
    $("#input").val(result);
}