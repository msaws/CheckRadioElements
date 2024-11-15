

const chkboxSubscribe = document.getElementById("chkbox_subscribe");
const radioMaster = document.getElementById("master");
const radioVisa = document.getElementById("visa");
const radioPaypal = document.getElementById("paypal");
const radioAmex = document.getElementById("amex");
const txtParagraph1 = document.getElementById("output");
const btnSubmit = document.getElementById("btnSubmit")
const txtParagraph2 = document.getElementById("output2");

btnSubmit.onclick = btnchkPaymentOptions = () => {

    if (chkboxSubscribe.checked)
        txtParagraph1.textContent = "Thanks for subscribing to our weekly newsletter.";
    else         
        txtParagraph1.textContent = "Please consider subscribing, we will never spam your inbox.";

    if (radioAmex.checked)
        txtParagraph2.textContent = "Your payment method is AMEX, we'll charge you 5GBP monthly.";

    else if (radioPaypal.checked)
        txtParagraph2.textContent = "Your payment method is PayPal, we'll charge you 5GBP monthly.";

    else if (radioMaster.checked)
        txtParagraph2.textContent = "Your payment method is Master Card, we'll charge you 5GBP monthly.";

    else if (radioVisa.checked)
        txtParagraph2.textContent = "Your payment method is Visa Card, we'll charge you 5GBP monthly.";

}



