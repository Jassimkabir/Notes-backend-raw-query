-- Create Table
CREATE TABLE note(
    note_id SERIAL PRIMARY KEY,
    description TEXT,
    date DATE NOT NULL
);