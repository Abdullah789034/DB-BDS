-- Create the database
Create DATABASE blood_donation5;


-- Use the database
USE blood_donation5;

-- Create the Donors table
Create table donors (
    id int Primary key,
    name varchar(100) ,
    blood_type varchar(3) ,
    age int ,
    contact_info varchar(100) ,
    registration_date date 
);


-- Create the Donations table
Create table donations (
    id int Primary key,
    donor_id int,
    donation_date date ,
    quantity int ,
    blood_type varchar(3) 
);


-- Create the Hospitals table
Create table hospitals (
    id int Primary key,
    name varchar(100) ,
    address varchar(200) ,
    contact_info varchar(100) 
);


-- Create the Requests table
Create table requests (
    id int Primary key,
    hospital_id int,
    blood_type varchar(3) ,
    request_date date ,
    quantity int ,
    status varchar(50) 
);


-- Create the Staff table
Create table staff (
    id int Primary key,
    name varchar(100) ,
    position varchar(100) ,
    contact_info varchar(100) ,
    hospital_id int
);


-- Create the Blood Inventory table
Create table blood_inventory (
    id int Primary key,
    blood_type varchar(3) ,
    quantity int ,
    expiry_date date 
);




-- insert sample data into the Donors table
insert into donors (id, name, blood_type, age, contact_info, registration_date)
values 
(1, 'Ali Khan', 'A+', 30, 'ali@example.com', '2024-05-01'),
(2, 'Fatima Ahmed', 'O-', 25, 'fatima@example.com', '2024-05-02'),
(3, 'Muhammad Hassan', 'B+', 35, 'hassan@example.com', '2024-05-03');

-- insert sample data into the Donations table
insert into donations (id, donor_id, donation_date, quantity, blood_type)
values
(1, 1, '2024-05-01', 500, 'A+'),
(2, 2, '2024-05-02', 450, 'O-'),
(3, 3, '2024-05-03', 500, 'B+');

-- insert sample data into the Hospitals table
insert into hospitals (id, name, address, contact_info)
values
(1, 'Lahore General Hospital', '123 Main St, Lahore', 'contact@lgh.com'),
(2, 'Karachi City Hospital', '456 Elm St, Karachi', 'contact@kch.com');

-- insert sample data into the Requests table
insert into requests (id, hospital_id, blood_type, request_date, quantity, status)
values
(1, 1, 'A+', '2024-05-10', 500, 'pending'),
(2, 2, 'O-', '2024-05-11', 450, 'pending');

-- insert sample data into the Staff table
insert into staff (id, name, position, contact_info, hospital_id)
values
(1, 'Dr. Ali Raza', 'Surgeon', 'ali@lgh.com', 1),
(2, 'Nurse Fatima Akhtar', 'Nurse', 'fatima@kch.com', 2);

-- insert sample data into the Blood Inventory table
insert into blood_inventory (id, blood_type, quantity, expiry_date)
values
(1, 'A+', 1000, '2024-08-01'),
(2, 'O-', 450, '2024-07-01'),
(3, 'B+', 500, '2024-09-01');

-- insert sample data into the Transactions table


SELECT * FROM transactions;
-- insert sample data into the Donors table
insert INTO donors ( name, blood_type, age, contact_info, registration_date)
VALUES 
('Sara Ali', 'AB+', 28, 'sara@example.com', '2024-05-04'),
('Zainab Baloch', 'A-', 32, 'zainab@example.com', '2024-05-05');

-- insert sample data into the Donations table
insert INTO donations (id, donor_id, donation_date, quantity, blood_type)
VALUES
(4, 4, '2024-05-04', 600, 'AB+'),
(5, 5, '2024-05-05', 400, 'A-');

-- insert sample data into the Hospitals table
insert INTO hospitals (id, name, address, contact_info)
VALUES
(3, 'Islamabad Medical Center', '789 Maple St, Islamabad', 'contact@imc.com'),
(4, 'Peshawar Health Clinic', '101 Oak St, Peshawar', 'contact@phc.com'),
(5, 'Quetta Care Hospital', '202 Pine St, Quetta', 'contact@qch.com');

-- insert sample data into the Requests table
insert INTO requests (id, hospital_id, blood_type, request_date, quantity, status)
VALUES
(3, 3, 'B+', '2024-05-12', 500, 'fulfilled'),
(4, 4, 'AB+', '2024-05-13', 600, 'pending'),
(5, 5, 'A-', '2024-05-14', 400, 'fulfilled');

-- insert sample data into the Staff table
insert INTO staff (id, name, position, contact_info, hospital_id)
VALUES
(3, 'Dr. Ahmed Khan', 'Pediatrician', 'ahmed@imc.com', 3),
(4, 'Dr. Sara Malik', 'Cardiologist', 'sara@phc.com', 4),
(5, 'Nurse Zain Ali', 'Nurse', 'zain@qch.com', 5);

-- insert sample data into the Blood Inventory table
insert INTO blood_inventory (id, blood_type, quantity, expiry_date)
VALUES
(4, 'AB+', 600, '2024-10-01'),
(5, 'A-', 400, '2024-11-01');
