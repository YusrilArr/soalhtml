let users = {
    Monica: {
        name: "Monica",
        gender: "Female",
        email: "monica@dingdong.com",
        favoriteColor: ["Yellow", "Pink", "White", "Purple"],
        isHavePet: "Yes",
        education:[
            {
                name: "SD 01",
                city: "Jakarta",
                graduate: 2016,
            },
            {
                name: "SMP 02",
                city: "Jakarta",
                graduate: 2019,
            },
            {
                name: "SMA 03",
                city: "Tangerang",
                
            }
            ],
        favoriteRestaurant: ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi",],


    },
    Wendy: {
        name: "Wendy",
        gender: "Male",
        email: "wendy@dingdong.com",
        favoriteColor: ["Blue", "Black", "Grey"],
        isHavePet: "No",
        education: [
            {
                name: "SD 02",
                city: "Jakarta",
                graduate: 2010,
            },
            {
                name: "SMP 03",
                city: "Bogor",
                graduate: 2013,
            },
            {
                name: "SMA 01",
                city: "Surabaya",
                graduate: 2016,
            },
            {
                name: "Universitas Maju",
                city: "Tangerang",
            }
        ],
        favoriteRestaurant: ["Tempura", "Bento", "Sushi", "Pancake","Padang","Katsu","Geprek","Pancake","Eggy",],

    }
};

// console.log("Nama : " + users.Monica.name);
// console.log("SMA : " + users.Monica.education[2].name);
// console.log("Kota : " + users.Monica.education[2].city);
// console.log("Makanan Favorit : " +users.Monica.favoriteRestaurant[2]);

console.log("Nama : " + users.Wendy.name);
console.log("SMA : " + users.Wendy.education[2].name);
console.log("Kota : " + users.Wendy.education[2].city);
console.log("Makanan Favorit : " +users.Wendy.favoriteRestaurant[5]);
