<template>
    <div class="max-w-full bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
            <textarea 
                v-model="localValue"
                @input="$emit('update:modelValue', localValue)"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" 
                name="message" 
                rows="5" 
                placeholder="Add New Note.."
                ref="textareaRef"
            ></textarea>
        </div>
        <div class="flex justify-end">
           <slot name="buttons"/>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
/** props */
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

/** emits */
const emit = defineEmits(['update:modelValue'])

const localValue = ref(props.modelValue)

// watch(localValue, (newVal) => {
//   emit('update:modelValue', newVal)
// })

/** Focus Textarea */
const textareaRef = ref(null)

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})

</script>