DROP FUNCTION IF EXISTS luhn;

DELIMITER //

CREATE FUNCTION luhn(inputString VARCHAR(255))
  RETURNS INT(1)
  SQL SECURITY INVOKER
BEGIN
  DECLARE cleanInput VARCHAR(255);
  DECLARE weight, idx, mySum, digit, base INT;

  -- Remove spaces and make all letters uppercase
  SET cleanInput = REPLACE(UPPER(inputString), " ", "");

  -- Check validity of characters
  IF cleanInput REGEXP "[^a-zA-Z0-9]" THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = "Only alphanumeric and whitespace characters are allowed";
  END IF;

  -- Reverse the string
  SET cleanInput = REVERSE(cleanInput);

  -- Initialize a sum of values
  SET mySum = 0;

  SET idx = 1;
  WHILE idx <= LENGTH(cleanInput) DO
    -- Store ASCII code for character, subtract 48
    SET digit = ASCII(SUBSTRING(cleanInput, idx, 1)) - 48;

    -- Calculate weight based on even/odd index
    SET base = 1; -- 1, since MySQL has "1 based" indexing
    SET weight = IF(
      MOD(idx, 2) = base,
      2 * digit - FLOOR(digit / 5) * 9,
      digit
    );

    -- Add weight to sum of values
    SET mySum = mySum + weight;

    -- Increment index
    SET idx = idx + 1;
  END WHILE;

  -- Calculate check digit
  SET mySum = ABS(mySum) + 10;
  RETURN MOD(10 - MOD(mySum, 10), 10);
END //
