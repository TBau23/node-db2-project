
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: "Ford", model: "Bronco", mileage: 2000},
        {make: "Lamborghini", model: "Aventador", mileage: 0}
      ]);
    });
};
