<template>
    <div class="container mx-auto py-10">
        <h4 class="pl-2 font-semibold">Update Note</h4>
        <br>
        <AddEditNote ref="addEditNoteRef">
            <template #buttons>
                <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Update Note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import AddEditNote from '../components/Notes/AddEditNote.vue';


</script>
