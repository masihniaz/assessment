/*
  considering the case sensitivity we can pass both columns, 1 and 2 in LOWER() function and then pass one of the columns, either column 1 or 2 to the REVERSE() function
*/
SELECT * FROM string_rotation_candidates
WHERE LOWER(column_1) = REVERSE(LOWER(column_2))

/*
  without considering the case sensitivity we can just pass one of the columns in the REVERSE() function, eiter column 1 or 2
*/
SELECT * FROM string_rotation_candidates
WHERE column_1 = REVERSE(column_2)