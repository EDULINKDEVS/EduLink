CREATE TABLE users (
  label ENUM('employee', 'employer'),
  email VARCHAR(100),
  id INT PRIMARY KEY AUTO_INCREMENT,
  password VARCHAR(100)
);

CREATE TABLE company_data (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(100),
  nip VARCHAR(30),
  street VARCHAR(40),
  zip VARCHAR(10),
  adress_num VARCHAR(4),
  phone VARCHAR(15),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

