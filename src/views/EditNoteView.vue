<template>
    <div class="container mx-auto py-10">
        <h4 class="pl-2 font-semibold">Update Note</h4>
        <br>
        <AddEditNote v-model="noteContent" ref="addEditNoteRef">
            <template #buttons>
                <button
                    @click="$router.go(-1)"
                    class="bg-gray-200 text-black font-bold py-2 px-4 rounded border-gray-800 mr-4">Cancel</button>
                <button  
                    @click="handleSaveClicked"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Save Note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { useStoreNotes } from '../stores/notes'

/**
 * Router
 */

 const route = useRoute()
 const router = useRouter()

/**
 * Store
 */
const storeNotes = useStoreNotes()

/**
 * Note
 */
const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)


/**
 * Save
 */
const handleSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
}


</script>
