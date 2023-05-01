import { defineStore } from "pinia";

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 'e321321',
                    content: 'Sample content for everyone'
                },
                {
                    id: '23142543',
                    content: 'Second Sample content for everyone'
                },
            ]
        }
    },

    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => { return note.id === id })[0].content
            }
        },
        totalNotesCount: state => state.notes.length,
        totalCharacterCount: state => {
            let count = 0
            state.notes.forEach(note => {
                count += note.content.length
            })

            return count
        }
    },

    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime(), id = currentDate.toString()
            let note = {
              id: id,
              content: newNoteContent
            }
            this.notes.unshift(note);
        },

        deleteNote(noteId) {
            this.notes = this.notes.filter(note => { return note.id !== noteId })
        },

        updateNote(id, content) {
            let index = this.notes.findIndex(note => note.id === id)
            this.notes[index].content = content
        }
    }
})