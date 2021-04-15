<template>
  <div class="vehicles">
    <div class="content-title-group">
    <h1 class="title">Vehicles</h1>
    </div>
    <h2>{{ message }}</h2>
    <div v-for="vehicle in vehicles" :key="vehicle.id">
      <div
        @click="selectedVehicle = vehicle"
        :class="{ 'is-selected': selectedVehicle === vehicle }">
        {{ vehicle.make }} {{vehicle.model}} {{vehicle.modelYear}}
      </div>
    </div>
    <!-- Vehicle Details -->
    <VehicleDetail v-if="selectedVehicle" :vehicle="selectedVehicle"/>
  </div>
</template>

<script>
import { data } from '../shared/data'
import VehicleDetail from '@/components/vehicle-detail';

const vehicleList = [
  {
    id: 1,
    registrationNo: 'ABC123',
    make: 'Chevrolet',
    model: 'Corvette',
    modelYear: '2015',
    imageName: 'car1',
    mileage: 25000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 2,
    registrationNo: 'AAA123',
    make: 'Ford',
    model: 'Mustang',
    modelYear: '2017',
    imageName: 'car2',
    mileage: 48500,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 3,
    registrationNo: 'BBB123',
    make: 'Porsche',
    model: 'Alpine',
    modelYear: '1967',
    imageName: 'car3',
    mileage: 89000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
];

export default {
  data() {
    return {
      vehicles: [],
      selectedVehicle: undefined,
      message: '',
    };
  },
  components: { VehicleDetail },
  computed: {
    vehicleName() {
      return `${this.selectedVehicle.make} ${this.selectedVehicle.model}`;
    },
  },
  async created() {
    await this.loadVehicles();
  },
  methods: {
    async getVehicles() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(vehicleList), 1500);
      });
    },
    async loadVehicles() {
      this.vehicles = [];
      this.message = 'Getting vehicles, please wait...';
      //this.vehicles = await this.getVehicles();
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
</style>
