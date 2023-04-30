<template>
    <AddEditNote v-model="newNote" ref="addEditNoteRef">
      <template #buttons>
        <button @click="addNote" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <div v-if="storeNotes.notes.length == 0" class="text-center py-10">
        No notes available...
    </div>

    <Note v-for="note in storeNotes.notes" 
      v-else 
      :key="note.id" 
      :data="note" 
      @deleteClicked="deleteNote"
    />
    
</template>

<script setup>
/** Imports */
import { ref } from "vue";
import Note from '@/components/Notes/Note.vue'
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/notes";

/** Store */
const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

const deleteNote = (idToDelete) => {
  storeNotes.deleteNote(idToDelete)
}



</script>

<style>

</style>