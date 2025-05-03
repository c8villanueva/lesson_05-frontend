import React from 'react'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNoteById } from './notesApiSlice'
import { selectAllUsers } from '../users/usersApiSlice'
import EditNoteForm from './EditNoteForm'

const EditNote = () => {
  const { id } = useParams() //get id

  const note = useSelector(state => selectNoteById(state, id)) //get note data
  const users = useSelector(selectAllUsers)

  const content = note && users ? <EditNoteForm note={note} users={users} /> : <p>Loading...</p>

  return content
}
export default EditNote
