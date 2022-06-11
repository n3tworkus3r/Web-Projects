------------------- Создание таблиц -------------------

CREATE TABLE Users  
(
	user_id int PRIMARY KEY NOT NULL IDENTITY,  
	login varchar(30) NOT NULL,  
	password varchar(30) NOT NULL,  
	role int NOT NULL
);  

CREATE TABLE User_infos  
(
	user_id int PRIMARY KEY NOT NULL IDENTITY,  
	email varchar(30),  
	address varchar(30),
	phone varchar(30),
	img varchar(100)
);  


CREATE TABLE Classes  
(
	class_id int PRIMARY KEY NOT NULL IDENTITY,  
	name varchar(10) NOT NULL,   
	subject_id int NOT NULL,
	teacher_id int NOT NULL,
	student_quantity int, 
	middle_rate float
);


CREATE TABLE Subjects  
(
	subject_id int PRIMARY KEY NOT NULL IDENTITY,  
	name varchar(15) NOT NULL,   
	task_id int NOT NULL,
	task_quantity int
);


CREATE TABLE Class_subjects  
(
	class_subject_id int PRIMARY KEY NOT NULL IDENTITY,
	class_id int NOT NULL,
	subject_id int NOT NULL
);


CREATE TABLE Tasks  
(
	task_id int PRIMARY KEY NOT NULL IDENTITY,  
	text varchar(255) NOT NULL,
	solution varchar(255) NOT NULL,
	img varchar(100),
	complexity float
);


CREATE TABLE Class_tasks  
(
	class_task_id int PRIMARY KEY NOT NULL IDENTITY,  
	class_id int NOT NULL,
	task_id int NOT NULL
);

------------------- Изменение таблиц -------------------

---- Classes ----

ALTER TABLE Classes
	ADD CONSTRAINT FK_Clases_User_infos 
	FOREIGN KEY(teacher_id) REFERENCES User_infos(user_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE

---- Class_subjects ----
ALTER TABLE Class_subjects
	ADD CONSTRAINT FK_Class_subjects_Classes 
	FOREIGN KEY(class_id) REFERENCES Classes(class_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE

ALTER TABLE Class_subjects
	ADD CONSTRAINT FK_Class_subjects_Subjects
	FOREIGN KEY(subject_id) REFERENCES Subjects(subject_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE

---- Class_tasks ----

ALTER TABLE Class_tasks
	ADD CONSTRAINT FK_Class_tasks_Classes 
	FOREIGN KEY(class_id) REFERENCES Classes(class_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE

ALTER TABLE Class_tasks
	ADD CONSTRAINT FK_Class_tasks_Tasks 
	FOREIGN KEY(task_id) REFERENCES Tasks(task_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE

---- Subjects ----
ALTER TABLE Subjects
	ADD CONSTRAINT FK_Subjects_Tasks 
	FOREIGN KEY(subject_id) REFERENCES Tasks(task_id)


---- User_infos ----

ALTER TABLE User_infos
	ADD CONSTRAINT FK_User_infos_Users 
	FOREIGN KEY(user_id) REFERENCES Users(user_id)

---- Users ----

ALTER TABLE Users
	ADD CONSTRAINT FK_Users_User_infos 
	FOREIGN KEY(user_id) REFERENCES User_infos(user_id)



------------------- Заполнение таблиц -------------------

---- Tasks ----
INSERT Tasks (text, solution, img,complexity)  
    VALUES ( 'Task', 'Solution', 'none',3.2)
     ( 'Task2', 'Solution2', 'XXX',5.0)  
GO     
