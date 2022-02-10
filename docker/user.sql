USE web;
CREATE TABLE IF NOT EXISTS user (
  id mediumint not null AUTO_INCREMENT,
  firstname VARCHAR(32) NOT NULL,
  lastname VARCHAR(32) NOT NULL,
  document VARCHAR(16) NOT NULL,
  address VARCHAR(64) NOT NULL,
  phone VARCHAR(16) DEFAULT NULL,
  email VARCHAR(32) DEFAULT NULL,
  primary key (id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

ALTER TABLE
  user
ADD
  UNIQUE document (document);
  
INSERT INTO
  user (firstname, lastname, document, address, phone, email)
VALUES
  (
    'Alvaro',
    'Cardozo',
    '1010064025',
    'casablanca',
    '3204927564',
    'alvaro@example.com'
  );
INSERT INTO
  user (firstname, lastname, document, address, phone, email)
VALUES
  (
    'Andres',
    'Velez',
    '1010075755',
    'bosa',
    '1316456123',
    'andres@example.com'
  );
  
INSERT INTO
  user (firstname, lastname, document, address, phone, email)
VALUES
  (
    'Monica',
    'Fuentes',
    '1013215315',
    'bosa',
    '1316456123',
    'monica@example.com'
  );

INSERT INTO
  user (firstname, lastname, document, address, phone, email)
VALUES
  (
    'Luis',
    'Castañeda',
    '1856446215',
    'zipa',
    '1316456123',
    'luis@example.com'
  );

INSERT INTO
  user (firstname, lastname, document, address, phone, email)
VALUES
  (
    'Manolo',
    'Cruz',
    '1856985672',
    'suba',
    '1316456123',
    'luis@example.com'
  );