import knex from "knex";

class Productos {
  constructor(config) {
    this.knex = knex(config);
  }

  crearTabla() {
    return this.knex.schema.dropTableIfExists("productos").then(() => {
      return this.knex.schema.createTable("productos", (table) => {
        table.increments("id").primary();
        table.string("title", 25).notNullable();
        table.integer("price");
        table.string("thumbmail", 100).notNullable();
      });
    });
  }

  cerrarDB() {
    return this.knex.destroy();
  }

  insertar(productos) {
    return this.knex("productos").insert(productos);
  }

  listar() {
    return this.knex("productos").select("*");
  }
}

//module.exports.Productos = Productos;
export default Productos;
