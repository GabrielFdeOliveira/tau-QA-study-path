const cookie = {
  name: "chocolate chip",
  isGlutenFree: false,
  eatCookie: function () {
    console.log("I am eating " + this.name);
  },
};

cookie.name = "snickerdoodle cookie";
cookie.isGlutenFree = true;

console.log(cookie);

class Cookie {
  constructor(name, isGlutenFree) {
    this.name = name;
    this.isGlutenFree = isGlutenFree;
  }
  eatCookie() {
    console.log("I am eating " + this.name);
  }
}

const myCookie = new Cookie("Vanilla cookie", false);

myCookie.eatCookie();
