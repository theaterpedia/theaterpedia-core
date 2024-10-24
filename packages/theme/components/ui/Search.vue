<script setup lang="ts">
import { SfIconCancel, SfIconSearch, SfInput, useDisclosure } from '@crearis/vue'
import { unrefElement } from '@vueuse/core'

const props = defineProps<{
  close?: () => boolean
}>()

const router = useRouter()
const { open } = useDisclosure()

const inputModel = ref('')
const inputReference = ref<HTMLSpanElement>()
function handleInputFocus() {
  const inputElement = unrefElement(inputReference)?.querySelector('input')
  inputElement?.focus()
}
function handleReset() {
  inputModel.value = ''
  handleInputFocus()
}
function handleSubmit() {
  props.close?.()
  router.push({ path: paths.search, query: { search: inputModel.value } })
  handleReset()
}

watch(inputModel, () => {
  if (inputModel.value === '')
    handleReset()
})
</script>

<template>
  <form role="search" class="relative" @submit.prevent="handleSubmit">
    <SfInput ref="inputReference" v-model="inputModel" :aria-label="$t('search')" :placeholder="$t('search')" @focus="open">
      <template #prefix>
        <SfIconSearch />
      </template>
      <template #suffix>
        <button
          v-if="inputModel"
          type="button"
          aria-label="Reset search"
          class="flex rounded-md focus-visible:outline focus-visible:outline-offset"
          @click="handleReset"
        >
          <SfIconCancel />
        </button>
      </template>
    </SfInput>
  </form>
</template>
