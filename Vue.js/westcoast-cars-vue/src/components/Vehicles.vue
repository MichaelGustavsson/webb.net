<template>
  <section class="vehicles">
    <div class="content-title-group">
      <h1 class="title">Vehicles</h1>
    </div>
    <h2>{{ message }}</h2>
    <div v-for="vehicle in vehicles" :key="vehicle.id">
      <div
        v-on:click="selectedVehicle = vehicle"
        v-bind:class="{ 'is-selected': selectedVehicle === vehicle }"
      >
        {{ vehicle.make }} {{ vehicle.model }} {{ vehicle.modelYear }}
      </div>
    </div>
    <br />
    <br />
    <hr />
    <VehicleDetail
      v-if="selectedVehicle"
      v-bind:vehicle="selectedVehicle"
    ></VehicleDetail>
  </section>
</template>

<script>
import { data } from '/shared/data';
import VehicleDetail from './vehicle-detail';

export default {
  data() {
    return {
      vehicles: [],
      selectedVehicle: undefined,
      message: '',
    };
  },
  components: { VehicleDetail },
  async created() {
    await this.loadVehicles();
  },
  methods: {
    async loadVehicles() {
      this.vehicles = [];
      this.message = 'Getting vehicles, please wait...';

      this.vehicles = await data.loadVehicles();
      this.message = '';
    },
  },
};
</script>

<style>
.vehicles {
  background-color: #f4f4f4;
}

.is-selected {
  background-color: darkblue;
  color: #fff;
}
</style>
