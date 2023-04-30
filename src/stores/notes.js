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
        }
    }
})