///////////////////////////////////
// Displays forms based on Radio
///////////////////////////////////
function paymentTypeForm(c) 
{
    if (c.value == "CDCard") {

        document.getElementById("creditOrDebit").style.visibility = 'visible';
        document.getElementById("paypal").style.visibility = 'hidden';
        document.getElementById("CashApp").style.visibility = 'hidden';
        document.getElementById("applePay").style.visibility = 'hidden';
    } else if (c.value == "PYPL") {
        document.getElementById("creditOrDebit").style.visibility = 'hidden';
        document.getElementById("paypal").style.visibility = 'visible';
        document.getElementById("CashApp").style.visibility = 'hidden';
        document.getElementById("applePay").style.visibility = 'hidden';
    } else if (c.value == "CashApp") {
        document.getElementById("creditOrDebit").style.visibility = 'hidden';
        document.getElementById("paypal").style.visibility = 'hidden';
        document.getElementById("CashApp").style.visibility = 'visible';
        document.getElementById("applePay").style.visibility = 'hidden';
    } else if (c.value == "APay") {
        document.getElementById("creditOrDebit").style.visibility = 'hidden';
        document.getElementById("paypal").style.visibility = 'hidden';
        document.getElementById("CashApp").style.visibility = 'hidden';
        document.getElementById("applePay").style.visibility = 'visible';
    } else {}
}

///////////////////////////////////
// Displays form based on Checkbox
///////////////////////////////////
function GiftCardCheckedInput()
{
    //get checkbox
    var checkBox = document.getElementById("HasGiftCard");
    //output text
    var text = document.getElementById("checkboxTextifTrue");

    if (checkBox.checked == true)
    {
        text.style.display = "block";
    } 
    else
    {
        text.style.display = "none";
    }
}

