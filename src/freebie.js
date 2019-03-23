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
  constructor(description, icon_name, main_color, children) {
    if (typeof children !== "object") throw new TypeError("[children] should be a children of Freebies");
    if (typeof description !== "string") throw new TypeError("[description] should be a string")
    if (typeof icon_name !== "string") throw new TypeError("[icon_name] should be a string")
    if (typeof main_color !== "string") throw new TypeError("[main_color] should be a string")
    
    this.description = description;
    this.children = children;
    this.icon_name = icon_name;
    this.main_color = main_color;
  }
}

module.exports = {
  Freebie,
  Category
};
