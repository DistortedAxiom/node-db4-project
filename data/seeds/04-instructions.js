
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, step_number: 1, instruction: "Get two slices of bread"},
        {id: 2, recipe_id: 1, step_number: 2, instruction: "Put a slice of cheese on bread"},
        {id: 3, recipe_id: 3, step_number: 1, instruction: "Pour water into cup noodle"}
      ]);
    });
};
