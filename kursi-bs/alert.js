$(document).ready(function(){
    $("#btnAlert").click(function(){
        event.preventDefault();
        window.scrollTo(0, 0);
        $("#divAlert").removeClass("d-none");
        const nama = $("#subs").val();
        $("#alertText").html("Test "+ nama);
    });

    $("#btnClose").click(function(){
        $("#divAlert").addClass("d-none");
    });
})