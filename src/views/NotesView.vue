<template>
    <div class="max-w-full bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <textarea v-model="newNote" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" rows="5" placeholder="Add New Note.."></textarea>
      </div>
      <div class="flex justify-end">
        <button @click="addNote" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Add New Note
        </button>
      </div>
    </div>
    <div v-if="notes.length == 0" class="text-center py-10">
        No notes available...
    </div>
    <Note v-for="note in notes" 
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

const newNote = ref('')
const notes = ref([
  {
    id: 'e321321',
    content: 'Sample content for everyone'
  },
  {
    id: '23142543',
    content: 'Second Sample content for everyone'
  },
])

const addNote = () => {
  let currentDate = new Date().getTime(), id = currentDate.toString()

  let note = {
    id: id,
    content: newNote.value
  }
  
  notes.value.unshift(note)
  newNote.value = ''
}

const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter(note => { return note.id !== idToDelete })
}



</script>

<style>

</style>