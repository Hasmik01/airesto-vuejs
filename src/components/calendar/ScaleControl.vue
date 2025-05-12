<template>
  <div class="bg-[#222222] fixed bottom-[24px] right-[24px] p-[8px] rounded-[8px] z-[9999999]">
    <h3 class="font-semibold text-white text-[13px] text-center pb-[4px]">Масштаб</h3>
    <div class="flex items-center justify-center gap-[8px] px-[8px]">
      <div class="rounded-[4px] bg-[#FFFFFF14] w-[24px] h-[24px] flex items-center justify-center cursor-pointer" @click="$emit('changeScale', 'out')">
        <IconMinus />
      </div>
      <div class="rounded-[4px] bg-[#FFFFFF14] w-[24px] h-[24px] flex items-center justify-center cursor-pointer" @click="$emit('changeScale', 'in')">
        <IconPlus />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconMinus from "@/components/icons/IconMinus.vue";
import IconPlus from "@/components/icons/IconPlus.vue";
</script>
