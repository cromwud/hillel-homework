const user = {
  name: "Oleg",
  age: 17,
  city: "Shostka",
  country: "Ukraine",

  showInfo: function () {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    console.log("City:", this.city);
    console.log("Country:", this.country);
  }
};

user.showInfo();