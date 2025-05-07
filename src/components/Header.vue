<template>
  <div class="h-[44px] w-full  bg-white dark:bg-[#ffffff0d] py-0 px-[20px] flex justify-between items-center">
    <h2 class="font-semibold text-[11px] text-white">AIRESTO | {{bookingData.restaurant.restaurant_name}}</h2>
    <!--    font-family: 'Inter';-->
    <div class="flex items-center gap-[8px]">
      <div class="input-wrapper">
        <IconSearch/>
        <input class="h-[28px] text-white bg-[#1B1B1D] py-0 px-[36px] border rounded-lg border-[#ffffff29]" placeholder="⌘+Л поиск по имени"/>
      </div>
      <button class="rounded-sm text-white w-[24px] h-[24px] bg-[#ffffff0d] flex items-center justify-center" @click="toggleTheme">
        <IconSun v-if="theme === 'light'"/>
        <IconMoon v-else/>
      </button>
      <button class="rounded-sm text-white h-[24px] bg-[#ffffff0d] flex items-center justify-start px-[6px]"><IconLogout/> Выйти</button>
    </div>
  </div>
</template>
<script setup>
import IconSearch from "@/components/icons/IconSearch.vue";
import IconSun from "@/components/icons/IconSun.vue";
import IconLogout from "@/components/icons/IconLogout.vue";
import {useBookingStore} from "@/stores/booking.js";
import {storeToRefs} from "pinia";
import { useTheme } from '@/composables/useTheme.js'
import IconMoon from "@/components/icons/IconMoon.vue";

const { theme, toggleTheme } = useTheme()
const bookingStore=useBookingStore();
const {bookingData}=storeToRefs(bookingStore)
</script>