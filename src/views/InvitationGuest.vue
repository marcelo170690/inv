<template>
  <div>
    <div class="invitation">
      <div class="invitation__parents">
        <div class="invitation__parents--father">
          Ing. Marcelo Choque Pacheco
        </div>
        <div class="invitation__parents--mother">
          Srta. Selma Flores Condori
        </div>
      </div>
      <div class="invitation__text">
        Tenemos el grato placer de invitarle a Ud.(s) al festejo del primer añito de nuestro hijito 
        <div class="invitation__text--center"><b class="valentin">Valentin Máximo Choque Flores</b></div>
        Que se efectuará en día domingo 26 de septiembre a horas 14:00 el el salon de eventos <b>Chispitas</b>
        ubicado en las calles Peralta Soruco #1010 Esq. Sucre.
        <div class="invitation__text--center">Agradecemos de antemano su gentil asistencia</div> 
      </div>
      <div v-if="!notGuest" class="invitation__other">
        <div
          v-for="guest in guests.guests"
          :key="guest.uuid"
        >
          {{ guest.name }}
        </div>
      </div>
      <div v-else class="invitation__other">
        No hay invitados
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="cake">
          <div class="candle"></div>
          <div class="top-layer"></div>
          <div class="middle-layer"></div>
          <div class="bottom-layer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../styles/style.css';
import { GUESTS } from '@/components/guest.js';
export default {
  data() {
    return {
      allGuests: GUESTS,
      notGuest: false,
      guests: {},
    }
  },
  created() {
    this.searchGuests();
  },
  methods: {
    searchGuests() {
      const index = this.allGuests.map(guest => guest.uuid).indexOf(this.uuidGuest);
      if (index === -1)
        this.notGuest = true;
      else
        this.guests = this.allGuests[index];
    },
  },
  computed: {
    uuidGuest() {
      return this.$route.params.uuid;
    },
  }
}
</script>
