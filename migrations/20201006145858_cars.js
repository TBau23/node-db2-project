
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments("VIN");

      tbl.string("make").notNullable().index();

      tbl.string("model").notNullable().index();

      tbl.integer("mileage").notNullable();

      tbl.string("transmission type").nullable();

      tbl.string("title status").nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
