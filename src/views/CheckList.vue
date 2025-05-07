<template>
  <div class="p-6 max-w-3xl mx-auto bg-white mt-[60px]">
    <h2 class="text-2xl font-bold mb-4">Чеклист: Требования к функционалу</h2>
    <div v-for="item in mainChecklist" :key="item.id" class="mb-2">
      <label class="flex items-center justify-start gap-2 ">
        <input type="checkbox" v-model="checked[item.id]" @change="saveState" />
        <span>{{ item.label }}</span>
      </label>
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4">Дополнительные задания</h2>
    <div v-for="item in extraChecklist" :key="item.id" class="mb-2">
      <label class="flex items-center justify-start gap-2">
        <input type="checkbox" v-model="checked[item.id]" @change="saveState" />
        <span v-html="item.label"></span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const mainChecklist = [
  { id: 'api', label: 'Получение данных из API' },
  { id: 'date-switch', label: 'Возможность переключения даты для просмотра бронирований на другие дни' },
  { id: 'zone-toggle', label: 'Включение и отключение зон для отображения' },
  { id: 'sticky-headers', label: 'Фиксация заголовков таблицы: столы — у левого края, время — вверху при прокрутке' },
  { id: 'restaurant-time', label: 'Отображается текущее время ресторана, а не локальное' },
  { id: 'events-display', label: 'Все события из раздела "Возможные события" в Figma отображаются' },
  { id: 'event-placement', label: 'Отображение событий соответствует правилам из раздела "Правила расположения"' },
  { id: 'hover-effect', label: 'Эффект наведения на событие соответствует примерам из раздела "Наведение"' },
  { id: 'scaling', label: 'Возможность изменения масштаба таблицы с шагом 16px по горизонтали и 4px по вертикали' },
  { id: 'performance-desktop', label: 'Страница работает без тормозов на десктопе и мобильных устройствах' },
  { id: 'performance-mobile', label: 'Производительность на мобильных устройствах проходит тест' }
]

const extraChecklist = [
  { id: 'theme-toggle', label: 'Переключение между темной и светлой темой' },
  {
    id: 'content-toggle',
    label: `Скрытие контента (<a href="https://www.figma.com/design/hyd2T0EUXfJ6UYZ0SAjrio/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5.-Ark-Studio?node-id=1-340" target="_blank">пример в Figma</a>)`
  },
  {
    id: 'search',
    label: `Поиск по имени<br><small>Реализовать без дизайна, использовать глобальный поиск как в <a href="https://vuejs.org/guide/introduction.html" target="_blank">документации Vue</a></small>`
  },
  {
    id: 'selection',
    label: `Выделение <strong>времени</strong> и <strong>столов</strong> для добавления бронирования<br>
      <small>
        <a href="https://minio.ark.software/outline-uploads/uploads/dd6426cf-bfea-4a91-9fae-29555b629cac/779de5c1-069a-4165-adf7-a95e79aa6315/selection.mov" target="_blank">Видео</a>. При нажатии "Создать" выводить ID столов, время начала и окончания
      </small>`
  }
]

// Хранилище состояния
const checked = reactive({})

// Загрузка из localStorage
onMounted(() => {
  const saved = JSON.parse(localStorage.getItem('checklist-state') || '{}')
  for (const item of [...mainChecklist, ...extraChecklist]) {
    checked[item.id] = saved[item.id] || false
  }
})

// Сохранение в localStorage
const saveState = () => {
  localStorage.setItem('checklist-state', JSON.stringify(checked))
}
</script>