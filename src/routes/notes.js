const  { Router } = require('express');
const router = Router();
const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller'); 

//.get() obtener datos
//.post() se utiliza cuando se va a guardar un nuevo dato
//.put()se utiliza para cualquier dato
//.delete() se utiliza para borrar un dato
//.patch() solo actualiza un dato

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
   .get(getNote)
   .put(updateNote)
   .delete(deleteNote)

module.exports = router;