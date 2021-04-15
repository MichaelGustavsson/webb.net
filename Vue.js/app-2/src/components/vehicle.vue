<template>
  <div>
    <h1>Westcoast Cars</h1>
    <h2>{{vehicle.make}} {{vehicle.model}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Vehicles',
  data() {
    return {
      vehicle: {
        make: 'Volvo',
        model: 'V60'
      }
    }
  },
}
</script>