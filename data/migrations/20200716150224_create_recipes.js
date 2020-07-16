
exports.up = function(knex) {
    return knex.schema
        .createTable("recipes", tbl => {
            tbl.increments('id')
            tbl.string('recipe_name', 128)
                .unique()
                .notNullable()
        })

        .createTable("ingredients", tbl => {
            tbl.increments('id')
            tbl.string('ingredient_name', 64)
                .unique()
                .notNullable()
        })

        .createTable("recipe_ingredients", tbl => {
            tbl.increments('id')
            tbl.float('quantity')
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })

        .createTable('instructions', tbl => {
            tbl.increments('id')
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references("recipes.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            tbl.integer('step_number')
                .unsigned()
                .notNullable()
            tbl.string('instruction')
                .notNullable()
        })

};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('instructions')
      .dropTableIfExists('recipe_ingredients')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
  };
