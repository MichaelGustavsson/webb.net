<template>
  <div>
    <h4>Details</h4>
    <div>
      This is a {{vehicle.make}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VehicleDetail',
    props: {
      vehicle: {
        type: Object,
        default: () => {}
      },
    },
    data() {
      return {
        clonedVehicle: {...this.vehicle}
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>