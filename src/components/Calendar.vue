<template>
  <div class="my-[16px] h-screen overflow-x-auto scroll-container custom-scroll w-full text-white pb-3  relative ">
    <div class="flex flex-col  sticky text-white top-0 z-[99999] bg-[#1B1B1D]">
      <div class="flex" style="width: calc(100% - 8px)">
        <div class="min-w-[80px] "></div>
        <template v-for="(table,key) in bookingData.tables" :key="key">
          <div class=" text-center pt-3 text-white min-w-[80px] bg-[#1B1B1D] w-full calendar-header-item" :style="`min-width:${columnWidth}`">
            <div class="flex items-center justify-center gap-2  min-h-[48px]" :style="`width:${columnWidth}`">
              <div class="flex flex-col justify-center items-center text-[11px] text-[#FFFFFFA3]">
                <p>
                  #
                  <span class="font-semibold text-[13px] inline mr-[4px] text-white">
                      {{table.number}}
                  </span>
                  {{table.capacity}} чел.
                </p>
                <p>
                    {{table.zone}}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="h-screen overflow-y-visible w-full custom-scroll relative">
      <div class="flex w-full">
        <div class="min-w-[80px] w-full max-w-[80px] flex sticky left-0 text-white z-[99999]" :style="`width:${columnWidth}`">
          <div class="flex flex-col w-full">
            <template v-for="(time, key) in timeLine" :key="key">
              <div class="flex items-center justify-center relative bg-[#1B1B1D]" :style="`height:${height}px`">
                <div class="absolute top-0 text-[#FFFFFFA3]" v-if="key > 0 ">{{ time }}</div>
              </div>
            </template>
          </div>
        </div>
        <div class="flex w-full">
          <template v-for="(table,key) in bookingData.tables" :key="key">
            <div class="flex flex-col min-w-[80px] w-full relative" :style="`min-width:${columnWidth}`">
              <template v-for="(time,ti) in timeLine" :key="ti">
                <div  class="border-t border-r min-w-[80px] w-full cursor-pointer border-[#FFFFFFA3]" :style="`height:${height}px;min-width:${columnWidth}`">
                </div>
              </template>
              <template v-for="(event,index) in table.events" :key="index" >
                <div class=" absolute w-full  border-b border-r calendar-item cursor-pointer  border-l-4 "
                     :style="{
                     top: `${event.top}px`,
                     left: `${event.left}px`,
                     height:`${event.height}px`,
                     background:event.backgroundColor,
                     borderColor:event.borderColor,
                     width:`${event.width}px`,
                      '--w': `${width}px`
                     }"
                >
                  <div class="h-full calendar-item-info"
                  >
                    <div class="flex flex-col items-start pl-[8px] h-full text-[11px]">
                      <span v-if="event.type==='reservation'">№ {{event.id}}</span>
                      <span class="font-semibold text-[11px]">{{event.label}}
                        <span class="text-[8px]" v-if="event.type==='reservation'">чел</span>
                      </span>
                      <span class="rounded-[4px] p-[2px] block font-semibold text-[8px] text-nowrap" v-if="event.isShowTag" :style="{
                         background:event.tagBackgroundColor,
                         color:event.tagColor,
                     }">{{event.status}}</span>
                      <span class="flex gap-0.5 items-center justify-start text-[11px]" v-if="event.type==='reservation'"><IconPhone/>{{event.phone_number}}</span>
                      <span>{{getFormatedTime(event.start)}}-{{getFormatedTime(event.end)}}</span>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </template>
        </div>
      </div>
      <div class="absolute bg-amber-600 w-full h-[1px]" :style="`top:${getTop(new Date(),bookingData.restaurant.opening_time,height)}px`">
      </div>
    </div>
  </div>
  <div class="bg-[#222222] position fixed bottom-[24px] right-[24px] p-[8px] rounded-[8px] z-[9999999]">
    <h3 class="font-semibold text-white text-[13px] text-center pb-[4px]">Масштаб</h3>
    <div class="flex items-center justify-center gap-[8px] px-[8px]">
      <div class="rounded-[4px] padding-[6px] bg-[#FFFFFF14] w-[24px] h-[24px] flex items-center justify-center cursor-pointer" @click="changeScale('out')">
        <IconMinus/>
      </div>
      <div class="rounded-[4px] padding-[6px] bg-[#FFFFFF14] w-[24px] h-[24px] flex items-center justify-center cursor-pointer"  @click="changeScale('in')">
        <IconPlus/>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import {generateTimelineFunction, getFormatedTime, getTop} from "@/helper/function.js";
import { useBookingStore } from "@/stores/booking.js";
import { storeToRefs } from "pinia";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMinus from "@/components/icons/IconMinus.vue";
import IconPlus from "@/components/icons/IconPlus.vue";

const MIN_HEIGHT = 40;
const MIN_WIDTH = 80;
const STEP = 4;



const bookingStore = useBookingStore();
const { bookingData ,height,width} = storeToRefs(bookingStore);

const timeLine = ref(
    generateTimelineFunction(
        bookingData.value.restaurant.opening_time,
        bookingData.value.restaurant.closing_time,
        30
    )
);

async function changeScale(direction) {
  if (direction === 'in') {
    height.value += STEP;
    width.value += 16;
  } else if (direction === 'out' && height.value > MIN_HEIGHT && width.value > MIN_WIDTH) {
    height.value -= STEP;
    width.value -= 16;
  }
  // await bookingStore.getBooking(height.value, width.value);
  bookingStore.updateEventPositionsWithNewWidth(width.value)
}

const columnWidth = computed(() => `${width.value}px`);
</script>

<style scoped>
.calendar-item{
  overflow: hidden;
}

.calendar-item:hover {
  min-width: var(--w)!important;
  width: var(--w)!important;
  overflow: visible;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.2); /* optional for visibility */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* for Safari */
}

.calendar-item-info{
  width: var(--w)!important;
}
</style>