import {onMounted, ref} from 'vue'
import {defineStore} from 'pinia'
import {data} from "@/helper/const.js";
import {normalizeEvents} from "@/helper/normalize.js";
import {getHeight, getTop, isSameDay} from "@/helper/function.js";
import apiClient from "../../apiClient.js";

export const useBookingStore = defineStore('booking', () => {
  const bookingData=ref({...data})
  const filter=ref({
    zones:{
      '1 этаж':true,
      '2 этаж':true,
      'Банкетный зал':true
    },
    date:data.current_day,
  })
  const width = ref(80); // numeric width
  const height = ref(40); // row height in px

  const getBooking =  async () => {
    try {
      const response = await apiClient.get(`api/booking`);
      bookingData.value = response.data;
    } catch (e) {

    }
    console.log(base_width.value)
    bookingData.value.tables = [...data.tables]
    console.log(bookingData.value.tables.length, data.tables.length)
    base_width.value = width.value ?? document.querySelector('.calendar-header-item').clientWidth

    bookingData.value.tables = bookingData.value.tables
        .filter(table => filter.value.zones[table.zone]) // Filter based on the zone
        .map(table => {
          const allEvents = normalizeEvents(table.orders, table.reservations);

          const selectedDayEvents = allEvents.filter(event =>
              isSameDay(event.start, filter.value.date)
          );

          const events = positionedEvents(selectedDayEvents);
          console.log(table.zone)
          return {
            ...table,
            events
          }
        });

  }
  const positionedEvents = ((events) => {
    const eventsWithTime = events
        .map(event => transformEvent(event, bookingData.value.restaurant.opening_time))
        .sort((a, b) => a.startMin - b.startMin);

    const groups = groupByOverlap(eventsWithTime);
    return positionEventsWithOverlap(groups);
  });

  const toMinutes = isoString => {
    const date = new Date(isoString);
    return date.getHours() * 60 + date.getMinutes();
  };

  function transformEvent(event, openingTime) {
    const startMin = toMinutes(event.start);
    const endMin = toMinutes(event.end);

    return {
      ...event,
      startMin,
      endMin,
      top: getTop(event.start, openingTime, height.value),
      height: getHeight(event.start, event.end, height.value),
    };
  }

  function groupByOverlap(events) {
    const groups = [];

    for (const event of events) {
      let placed = false;
      for (const group of groups) {
        const last = group[group.length - 1];
        if (event.startMin < last.endMin) {
          group.push(event);
          placed = true;
          break;
        }
      }
      if (!placed) groups.push([event]);
    }

    return groups;
  }

  function positionEventsWithOverlap(groups) {
    const positioned = [];

    for (const group of groups) {
      for (let i = 0; i < group.length; i++) {
        const event = group[i];

        const overlaps = group.filter(
            (other, j) =>
                i !== j &&
                event.startMin < other.endMin &&
                event.endMin > other.startMin
        );

        // Проверяем: есть ли перекрытия более чем на 30 минут
        const overlapWithDelay = group.find(
            other =>
                other !== event &&
                event.startMin < other.endMin &&
                event.endMin > other.startMin &&
                Math.abs(event.startMin - other.startMin) > 30
        );

        let left = 0;
        let width = base_width.value;

        // if (overlapWithDelay && overlapWithDelay.startMin > event.startMin) {
        //   // Текущий event раньше, он на полную ширину
        //   left = 0;
        //   width = base_width.value;
        // } else if (overlapWithDelay && overlapWithDelay.startMin < event.startMin) {
        //   // Текущий event позже, отступаем на 4px
        //   left = 4;
        //   width = base_width.value - 4;
        // }


        if (overlaps.length > 0) {
          // Обычное деление ширины при пересечениях
          const overlapIndex = group
              .slice(0, i)
              .filter(e => event.startMin < e.endMin && event.endMin > e.startMin)
              .length;

          const total = overlaps.length + 1;
          width = (base_width.value - (total - 1)) / total;
          left = overlapIndex * width;
        }

        positioned.push({
          ...event,
          left,
          width,
          zIndex: 10 + i,
        });
      }
    }

    return positioned;
  }

  function updateEventPositionsWithNewWidth(w) {
    bookingData.value.tables.forEach(table => {
      const allEvents = table.events.map(event => transformEvent(event, bookingData.value.restaurant.opening_time))
          .sort((a, b) => a.startMin - b.startMin);
      base_width.value=w
      const groups = groupByOverlap(allEvents);
      table.events = positionEventsWithOverlap(groups);
    });
  }


  const base_width=ref(0)
  onMounted(() => {
    console.log(document.querySelector('.calendar-header-item').clientWidth)
    base_width.value=document.querySelector('.calendar-header-item').clientWidth
  })


  return {
    bookingData,
    getBooking,
    updateEventPositionsWithNewWidth,
    filter,
    height,
    width
  }
})
