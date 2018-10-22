const PAGE_DATA = {
    pet1: {
        pic: "images/watcher.jpeg",
        name: "The Watcher",
        Price: "900.01",
        LostFine: "1800",
        info:
            "Glowing green, 20 tentacles ,and we think sharp teeth?\
             Lives in water. Even we don't know what it is."
    },
    pet2: {
        pic: "images/unicorn.jpg",
        name: "Unicorn",
        Price: "976.01",
        LostFine: "1952",
        info:
            "6 1/2 foot, 14-ton, hairy ,and ugly. Made from a skull 29,000 years old\
        No magic, sorry."
    },
    pet3: {
        pic: "images/griffon.jpg",
        name: "Griffon",
        Price: "859.01",
        LostFine: "1718",
        info:
            "Known for guarding treasure and priceless possessions.\
         A eagle and lion mix you don't want to miss."
    }
};

function pet1_temp() {
    var source = document.getElementById("pet_page_1").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(PAGE_DATA.pet1);
    document.querySelector("#pet1_page").insertAdjacentHTML("beforeend", html);
}
pet1_temp();

function pet2_temp() {
    var source = document.getElementById("pet_page_2").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(PAGE_DATA.pet2);
    document.querySelector("#pet2_page").insertAdjacentHTML("beforeend", html);
}
pet2_temp();
