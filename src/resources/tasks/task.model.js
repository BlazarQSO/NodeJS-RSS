const faker = require('faker');

class Task {
  constructor({
    id = faker.datatype.uuid(),
    title = faker.name.title(),
    order = faker.datatype.number(),
    description = faker.commerce.productDescription(),
    userId = null,
    boardId = faker.datatype.uuid(),
    columnId = faker.datatype.uuid(),
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
