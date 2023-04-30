<template>
    <div class="bg-white rounded-lg shadow-md p-4 mb-4">
      <div  class="flex items-center justify-between mb-4">
        <div class="d-flex justify-between">
            <h2 class="text-2xl font-bold text-gray-800">{{ data.id }}</h2>
            <span class="text-gray-500 font-medium text-sm">{{ comp_characterLength }} </span>
        </div>
        <div class="flex">
          <button @click="$router.push(`/edit/${data.id}`)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M14.293 3.293a1 1 0 00-1.414 0L5 10.586V15h4.414l7.293-7.293a1 1 0 000-1.414l-2-2zM6 13v-3.586L10.586 8H13v2.414l-7 7z" />
            </svg>
            Edit
          </button>
          <button @click="func_handleDelete(data.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM3.707 5.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            Delete
          </button>
        </div>
      </div>
      <p class="text-gray-600">{{ data.content }}</p>
    </div>
</template>

<script setup>
/** Imports */
import { computed } from "vue"


/** Props */
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

/** Emits */
const emit = defineEmits(['deleteClicked'])


const comp_characterLength = computed(() => {
    let description = props.data.content.length > 1 ? 'characters' : 'character'
    return props.data.content.length + ' ' + description;
})


const func_handleDelete = (id) => {
    emit('deleteClicked', id)
}


</script>

<style>

</style>