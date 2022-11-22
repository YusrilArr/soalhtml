$(document).ready(function(){
    $("#pic1").click(function (e){
        e.preventDefault();
        $("#gambar").attr("src", "Asset/chair-1.png");
        $("#nama").html("Syail Ammeno");
        $("#harga").html("IDR. 85.300.000");
    });

    $("#pic2").click(function (e){
        e.preventDefault();
        $("#gambar").attr("src", "Asset/chair-2.png");
        $("#nama").html("Lino Dino");
        $("#harga").html("IDR. 101.300.000");
    });

    $("#pic3").click(function (e){
        e.preventDefault();
        $("#gambar").attr("src", "Asset/chair-3.png");
        $("#nama").html("Samman Kakka");
        $("#harga").html("IDR. 123.300.000");
    });

    $("#pic4").click(function (e){
        e.preventDefault();
        $("#gambar").attr("src", "Asset/chair-4.png");
        $("#nama").html("Cangkir Mauttiee");
        $("#harga").html("IDR. 98.800.000");
    });
})