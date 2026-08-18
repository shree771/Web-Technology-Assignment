// =====================================================
// SUPERMARKET BILLING SYSTEM
// =====================================================


// =====================================================
// USER-DEFINED FUNCTION
// CALCULATES AMOUNT FOR ONE PRODUCT
// =====================================================

function calculateAmount(quantity, price) {

    // MULTIPLICATION OPERATOR
    let amount = quantity * price;

    // RETURN PRODUCT AMOUNT
    return amount;
}


// =====================================================
// MAIN BILL CALCULATION FUNCTION
// =====================================================

function calculateBill() {


    // =================================================
    // GET PRODUCT NAMES
    // =================================================

    let product1 =
        document.getElementById("product1").value.trim();

    let product2 =
        document.getElementById("product2").value.trim();

    let product3 =
        document.getElementById("product3").value.trim();


    // =================================================
    // GET QUANTITIES
    // =================================================

    let quantity1 =
        Number(
            document.getElementById("quantity1").value
        );

    let quantity2 =
        Number(
            document.getElementById("quantity2").value
        );

    let quantity3 =
        Number(
            document.getElementById("quantity3").value
        );


    // =================================================
    // GET UNIT PRICES
    // =================================================

    let price1 =
        Number(
            document.getElementById("price1").value
        );

    let price2 =
        Number(
            document.getElementById("price2").value
        );

    let price3 =
        Number(
            document.getElementById("price3").value
        );


    // =================================================
    // VALIDATE PRODUCT DETAILS
    // =================================================

    if (
        product1 === "" ||
        product2 === "" ||
        product3 === ""
    ) {

        document.getElementById("result").innerHTML =
            "<strong>Please enter all product names.</strong>";

        return;

    }


    // =================================================
    // VALIDATE QUANTITY AND PRICE
    // =================================================

    if (
        quantity1 <= 0 ||
        quantity2 <= 0 ||
        quantity3 <= 0 ||
        price1 < 0 ||
        price2 < 0 ||
        price3 < 0
    ) {

        document.getElementById("result").innerHTML =
            "<strong>Please enter valid quantity and price.</strong>";

        return;

    }


    // =================================================
    // CALCULATE EACH PRODUCT AMOUNT
    // =================================================

    let amount1 =
        calculateAmount(quantity1, price1);

    let amount2 =
        calculateAmount(quantity2, price2);

    let amount3 =
        calculateAmount(quantity3, price3);


    // =================================================
    // CALCULATE TOTAL BILL
    // =================================================

    let total =
        amount1 +
        amount2 +
        amount3;


    // =================================================
    // CALCULATE DISCOUNT
    // =================================================

    let discount = 0;


    // APPLY 10% DISCOUNT IF TOTAL > ₹2000

    if (total > 2000) {

        discount =
            total * 0.10;

    }


    // =================================================
    // CALCULATE FINAL PAYABLE AMOUNT
    // =================================================

    let finalAmount =
        total - discount;


    // =================================================
    // DISPLAY BILL
    // =================================================

    document.getElementById("result").innerHTML =

        "<h2>Customer Bill</h2>" +

        "<strong>" +
        product1 +
        "</strong> - ₹" +
        amount1.toFixed(2) +
        "<br>" +

        product2 +
        " - ₹" +
        amount2.toFixed(2) +
        "<br>" +

        product3 +
        " - ₹" +
        amount3.toFixed(2) +
        "<br><br>" +

        "<strong>Total Bill:</strong> ₹" +
        total.toFixed(2) +
        "<br>" +

        "<span class='discount'>" +
        "Discount (10%): ₹" +
        discount.toFixed(2) +
        "</span>" +
        "<br>" +

        "<span class='final'>" +
        "Final Payable Amount: ₹" +
        finalAmount.toFixed(2) +
        "</span>";

}


// =====================================================
// RESET FUNCTION
// =====================================================

function resetBill() {


    // CLEAR PRODUCT NAMES

    document.getElementById("product1").value = "";

    document.getElementById("product2").value = "";

    document.getElementById("product3").value = "";


    // CLEAR QUANTITIES

    document.getElementById("quantity1").value = "";

    document.getElementById("quantity2").value = "";

    document.getElementById("quantity3").value = "";


    // CLEAR PRICES

    document.getElementById("price1").value = "";

    document.getElementById("price2").value = "";

    document.getElementById("price3").value = "";


    // RESET RESULT

    document.getElementById("result").innerHTML =

        "<p>Enter product details and click " +
        "<strong>Calculate Bill</strong>.</p>";

}