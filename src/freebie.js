class Freebie {
  constructor(id, name, url, type, description, personalComment) {
    if (typeof id !== 'number') throw new TypeError("[id] should be a callback or a number");

    this.id = id;
    this.name = name;
    this.url = url;
    this.type = type;
    if (description) this.description = description;
    if (personalComment) this.personalComment = personalComment;
  }
}

class Category {
  constructor(name, description, icon_name, main_color, children) {
    if (typeof children !== "object") throw new TypeError("[children] should be an object");
    if (typeof description !== "string") throw new TypeError("[description] should be a string")
    if (typeof icon_name !== "string") throw new TypeError("[icon_name] should be a string")
    if (typeof main_color !== "string") throw new TypeError("[main_color] should be a string")
    
    this.name = name;
    this.description = description;
    this.iconName = icon_name;
    this.mainColor = main_color;
    this.children = [];

    children.forEach((freebie, index) => {
      this.children.push(new Freebie(index, freebie.name, freebie.url, name, freebie.description, freebie.personal_rating));
    })
  }
}

module.exports = {
  Freebie,
  Category
};
