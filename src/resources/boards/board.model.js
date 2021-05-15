const faker = require('faker');

class Board {
  constructor({
    id = faker.datatype.uuid(),
    title = faker.name.title(),
    columns = [{
      id: faker.datatype.uuid(),
      title: faker.name.title(),
      order: faker.datatype.number(),
    }],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
