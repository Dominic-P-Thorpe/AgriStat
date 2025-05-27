<template>
  <h1 class="text-center my-4">Farm Overview</h1>

  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Size</th>
        <th>Crop</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="field in field_data" v-bind:key="field.id">
        <td>{{ field.id }}</td>
        <td>{{ field.name }}</td>
        <td>{{ field.size }} Hectares</td>
        <td>{{ field.crop }}</td>
        <td><a href="#" class="btn btn-primary btn-sm">Details</a></td>
      </tr>
    </tbody>
  </table>

  <a href="#" class="btn btn-success">Add New Field</a>
</template>


<script>
export default {
  name: "FarmOverviewView",
  data() {
    return {
      field_data: [
        {
          id: "A151FD49",
          name: "Francis Drake",
          size: 14.23,
          crop: "Durum Wheat"
        }
      ]
    }
  }
}
</script>
