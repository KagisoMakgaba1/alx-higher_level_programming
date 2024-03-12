# SQL - Introduction

## Tasks :page_with_curl:

* **0. List databases**
  * [0-list_databases.sql](./0-list_databases.sql): Write a script that lists all databases of your MySQL server.

* **1. Create a database**
  * [1-create_database_if_missing.sql](./1-create_database_if_missing.sql): Write a script that creates the database `hbtn_0c_0` in your MySQL server.
  * If the database `hbtn_0c_0` already exists, your script should not fail
  * You are not allowed to use the `SELECT` or `SHOW` statements

* **2. Delete a database**
  * [2-remove_databases.sql](./2-remove_databases.sql): Write a script that deletes the database `hbtn_0c_0` in your MySQL server.
  * If the database `hbtn_0c_0` doesn’t exist, your script should not fail
  * You are not allowed to use the `SELECT` or `SHOW` statements

* **3. List tables**
  * [3-list_tables.sql](./3-list_tables.sql): MySQL script that lists all tables of a database in your MySQL server.
  * The database name will be passed as argument of `mysql` command (in the following example: `mysql` is the name of the database)

* **4. First table**
  * [4-first_table.sql](./4-first_table.sql): Write a script that creates a table called `first_table` in the current database in your MySQL server.
  * Description:
    * `id`: INT
    * `name`: VARCHAR(256)

* **5. Full description**
  * [5-full_table.sql](./5-full_table.sql): Write a script that prints the full description of the table `first_table` from the database `hbtn_0c_0` in your MySQL server.
  * The database name will be passed as an argument of the `mysql` command
  * You are not allowed to use the `DESCRIBE` or `EXPLAIN` statements

* **6. List all in table**
  * [6-list_values.sql](./6-list_values.sql): Write a script that lists all rows of the table `first_table` from the database `hbtn_0c_0` in your MySQL server.

* **7. First add**
  * [7-insert_value.sql](./7-insert_value.sql): Write a script that inserts a new row in the table `first_table` (database `hbtn_0c_0`) in your MySQL server.
  * New row:
    * `id` = `89`
    * `name` = `Best School`

* **8. Count 89**
  * [8-count_89.sql](./8-count_89.sql): Write a script that displays the number of records with `id = 89` in the table `first_table` of the database `hbtn_0c_0` in your MySQL server.

* **9. Full creation**
  * [9-full_creation.sql](./9-full_creation.sql): Write a script that creates a table `second_table` in the database `hbtn_0c_0` in your MySQL server and add multiples rows.
  * Description:
    * `id`: INT
    * `name`: VARCHAR(256)
    * `score`: INT
  * Records:
    * `id` = 1, `name` = "John", `score` = 10
    * `id` = 2, `name` = "Alex", `score` = 3
    * `id` = 3, `name` = "Bob", `score` = 14
    * `id` = 4, `name` = "George", `score` = 8

* **10. List by best**
  * [10-top_score.sql](./10-top_score.sql): Write a script that lists all records of the table `second_table` of the database `hbtn_0c_0` in your MySQL server.
  * Results should display both the score and the name (in this order)
  * Records should be ordered by score (top first)
  * The database name will be passed as an argument of the `mysql` command

* **11. Select the best**
  * [11-best_score.sql](./11-best_score.sql): Write a script that lists all records with a `score >= 10` in the table `second_table` of the database `hbtn_0c_0` in your MySQL server.
  * Results should display both the score and the name (in this order)
  * Records should be ordered by score (top first)
  * The database name will be passed as an argument of the `mysql` command

* **12. Cheating is bad**
  * [12-no_cheating.sql](./12-no_cheating.sql): Write a script that updates the score of Bob to `10` in the table `second_table`.
  * You are not allowed to use Bob’s id value, only the `name` field
  * The database name will be passed as an argument of the `mysql` command

* **13. Score too low**
  * [13-change_class.sql](./13-change_class.sql): Write a script that removes all records with a score <= 5 in the table `second_table` of the database `hbtn_0c_0` in your MySQL server.
  * The database name will be passed as an argument of the `mysql` command

* **14. Average**
  * [14-average.sql](./14-average.sql): Write a script that computes the score average of all records in the table `second_table` of the database `hbtn_0c_0` in your MySQL server.
  * The result column name should be `average`
  * The database name will be passed as an argument of the `mysql` command

* **15. Number by score**
  * [15-groups.sql](./15-groups.sql): Write a script that lists the number of records with the same score in the table `second_table` of the database `hbtn_0c_0` in your MySQL server.
  * The result should display the `score` and number of records for this `score` with the labe `number`.

* **16. Say my name**
  * [16-no_link.sql](./16-no_link.sql): Write a script that lists all records of the table `second_table` of the database `hbtn_0c_0` in your MySQL server.
  * Does not display rows without a `name` value.

* **17. Go to UTF8**
  * [100-move_to_utf8.sql](./100-move_to_utf8.sql): MySQL script that converts the `hbtn_0c_0`
  database to UTF8.

* **18. Temperatures #0**
  * [101-avg_temperatures.sql](./101-avg_temperatures.sql): MySQL script that displays the average
  temperature (Fahrenheit) by city in descending order.

* **19. Temperatures #1**
  * [102-top_city.sql](./102-top_city.sql): MySQL script that displays the three cities with the
  highest average temperature from July to August in descending order.

* **20. Temperature #2**
  * [103-max_state.sql](./103-max_state.sql): MySQL script that displays the max temperature of each
  state in order of state name.
