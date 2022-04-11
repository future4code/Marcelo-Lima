import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase {
    private createTableMySql() {
        Migrations.connection
            .raw(`
      CREATE TABLE IF NOT EXISTS PokemonGo(
         row VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         pokedex_number INT UNIQUE NOT NULL,
         generation INT NOT NULL,
         evolution_stage VARCHAR(255) NOT NULL,
         family_id VARCHAR(255) NOT NULL,
         type_1 VARCHAR(255) NOT NULL,
         type_2 VARCHAR(255) NOT NULL,
         weather_1 VARCHAR(255) NOT NULL
         weather_2 VARCHAR(255) NOT NULL,
         stat_total INT NOT NULL,
         attack INT NOT NULL,
         defense INT NOT NULL,
         stamina INT NOT NULL,
         legendary INT NOT NULL,
         shiny INT NOT NULL
      );
   `)
            .then(console.log)
            .catch(console.log)
    }
}

