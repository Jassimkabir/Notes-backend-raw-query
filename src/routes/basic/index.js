const router = require('express').Router({ mergeParams: true });
const pool = require('../../../db');
const moment = require('moment');

//Add a note
router.post('/add-note', async (req, res) => {
  try {
    const desc = req.body.description;
    const date = moment().format('YYYY-MM-DD');

    const newNote = await pool.query(
      'INSERT INTO note (description, date) VALUES ($1, $2) RETURNING *',
      [desc, date]
    );

    res.status(201).send(newNote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//Delete a note
router.post('/delete-note/:id', async (req, res) => {
  try {
    const noteId = req.params.id;

    const deleteNote = await pool.query('DELETE FROM note WHERE note_id = $1', [
      noteId,
    ]);

    res.status(200).send('Note deleted successfully');
  } catch (error) {
    console.error(error.message);
  }
});

//Get a note
router.get('/get-note/:id', async (req, res) => {
  try {
    const noteId = req.params.id;

    const getNote = await pool.query('SELECT * FROM note WHERE note_id = $1', [
      noteId,
    ]);

    res.status(200).send(getNote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//Get all notes
router.get('/get-all-notes', async (req, res) => {
  try {
    const getAllNotes = await pool.query('SELECT * FROM note');

    res.status(200).send(getAllNotes.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//Update a note
router.post('/update-post/:id', async (req, res) => {
  try {
    const noteId = req.params.id;
    const desc = req.body.description;
    const date = moment().format('YYYY-MM-DD');

    const updateNote = await pool.query(
      'UPDATE note SET description = $1, date = $2 WHERE note_id = $3 RETURNING *',
      [desc, date, noteId]
    );

    res.status(200).send(updateNote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
