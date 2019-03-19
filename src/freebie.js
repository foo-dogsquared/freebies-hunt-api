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

module.exports = Freebie;
