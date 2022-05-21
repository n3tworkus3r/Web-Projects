CREATE TABLE users
(
  id 		serial 				    PRIMARY KEY,
  login 	character varying(20) 	UNIQUE NOT NULL,
  password	character varying(30)	NOT NULL,
  role 		smallint
); 


CREATE TABLE user_infos
(  id					serial 				PRIMARY KEY,
   email 				character varying(255),
   address 				text,
   user_id              integer
);

CREATE TABLE reviews 
(
	id 			serial 	PRIMARY KEY,
	user_id 	integer,
	supplier_id	integer,
	text 		text
);

CREATE TABLE suppliers
(	id 			serial		 PRIMARY KEY,
	name 		text,
	rate 		float,
	description text NULL,
    user_id     integer
);

CREATE TABLE products_suppliers
(	
	id 			    serial		 PRIMARY KEY,
    product_id      integer,
    supplier_id     integer,
	price 		    float
);


CREATE TABLE products
(
	id 			serial		PRIMARY KEY,
	name 		text
);

CREATE TABLE orders
(
	id 				serial 		PRIMARY KEY,
	user_id 		integer,
	status 			character varying(30)
);

CREATE TABLE order_products
(
	id 				serial 		PRIMARY KEY,
	product_id 		integer,
    order_id 		integer
);


ALTER TABLE user_infos
	ADD CONSTRAINT fk_user_infos_user_id_users_id 
	FOREIGN KEY(user_id) REFERENCES users(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE reviews
	ADD CONSTRAINT fk_reviews_user_id_users_id 
	FOREIGN KEY(user_id) REFERENCES users(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE reviews
	ADD CONSTRAINT fk_reviews_supplier_id_suppliers_id 
	FOREIGN KEY(supplier_id) REFERENCES suppliers(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;
    
ALTER TABLE suppliers
	ADD CONSTRAINT fk_suppliers_user_id_users_id 
	FOREIGN KEY(user_id) REFERENCES users(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE products_suppliers
	ADD CONSTRAINT fk_products_suppliers_supplier_id_suppliers_id 
	FOREIGN KEY(supplier_id) REFERENCES suppliers(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;
	
ALTER TABLE products_suppliers
	ADD CONSTRAINT fk_products_suppliers_product_id_products_id 
	FOREIGN KEY(product_id) REFERENCES products(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE order_products
	ADD CONSTRAINT fk_order_products_product_id_products_suppliers_id 
	FOREIGN KEY(product_id) REFERENCES products_suppliers(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;
	

ALTER TABLE order_products
	ADD CONSTRAINT fk_order_products_order_id_orders_id 
	FOREIGN KEY(order_id) REFERENCES orders(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE orders
	ADD CONSTRAINT fk_orders_user_id_users_id 
	FOREIGN KEY(user_id) REFERENCES users(id)
	ON DELETE CASCADE
	ON UPDATE CASCADE;


INSERT INTO users(login, password, role)
VALUES
('Maks', 'RedBaron', 0),
('Roma', 'Radio', 0),
('Dima', 'Go to hell', 0),
('Anton', 'Pass666', 0),
('user1', 'Ps999', 0);

INSERT INTO user_infos(user_id, email, address)
VALUES
(1,'Maks@gmail.ru','Belarus'),
(2,'Roma@gmail.ru','Belarus'),
(3,'Dima@gmail.ru','Belarus'),
(4,'Anton@gmail.ru','Belarus'),
(5,'user1@gmail.ru','Belarus');

INSERT INTO suppliers(name, rate, description, user_id)
VALUES
('PizzaSmile', 2.3, 'THE BEST PIZZA', 1),
('BurgerBest', 2.1, 'THE BEST BurgerS', 2),
('YuammyFood', 3.8, 'any food', 3);

INSERT INTO products(name)
VALUES 
('Pizza'),
('Sushi'),
('PizzaCheese'),
('Burger'),
('Toast');

INSERT INTO products_suppliers(product_id, supplier_id, price)
VALUES 
(1, 1, 4.99),
(1, 2, 7),
(2, 3, 6),
(3, 1, 7),
(4, 2, 5);

INSERT INTO reviews(supplier_id, user_id, text)
VALUES
(3, 1, 'So so'),
(3, 2, 'yaummy'),
(3, 3, 'Cool'),
(2, 2, 'Norm'),
(1, 1, 'good');


INSERT INTO orders(user_id, status) 
VALUES
(1, 'finished'),
(2, 'pending'),
(3, 'in progress'),
(4, 'in progress'),
(5, 'pending');


INSERT INTO order_products(product_id, order_id)
VALUES 
(1, 1),
(1, 2),
(2, 3),
(3, 1),
(4, 2);