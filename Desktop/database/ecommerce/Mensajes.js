import knex from "knex";

class Mensajes {
  constructor(config) {
    this.knex = knex(config);
  }

  crearTabla() {
    return this.knex.schema.dropTableIfExists("mensajes").then(() => {
      return this.knex.schema.createTable("mensajes", (table) => {
        table.increments("id").primary();
        table.string("mensaje", 100).notNullable();
      });
    });
  }

  cerrarDB() {
    return this.knex.destroy();
  }
}

//module.exports.Productos = Productos;
export default Mensajes;
