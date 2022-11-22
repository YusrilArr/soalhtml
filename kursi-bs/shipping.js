$(document).ready(function() {
    $("#shipping-form").submit(function(e) {
        e.preventDefault();

        console.log("tai");

        const firstName = $("#validationDefaultFirstName", this).val();
        const lastName = $("#validationDefaultLastName", this).val();
        const email = $("#validationDefaultEmail", this).val();
        const address = $("#validationDefaultAddress", this).val();
        const fullName = firstName + " " + lastName;

        $("#form-main").addClass("d-none");
        $("#result").removeClass("d-none");

        $("h4", "#result").text("Terimakasih, " + fullName);
        $("p", "#result").text("Paket akan dikirimkan ke " + address + " secepatnya");

    });

    $("button", "#result").click(function(e) {
        e.preventDefault();
        window.location.href = "kursi.html";
    })
})