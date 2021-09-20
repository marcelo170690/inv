<template>
  <div>
    <div
      v-for="guest in guests"
      :key="guest.uuid"
    >
      {{ guest.guests }}
    </div>
  </div>
</template>

<script>
import { GUESTS } from '@/components/guest.js';
export default {
  data() {
    return {
      guests: GUESTS,
    };
  },
}
</script>