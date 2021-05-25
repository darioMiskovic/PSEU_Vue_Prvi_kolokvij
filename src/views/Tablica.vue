<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Ime
          </th>
          <th class="text-left">
            Broj indexa
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in studenti" :key="student.broj_indexa">
          <td>{{ student.ime }}</td>
          <td>{{ student.broj_indexa }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data: function() {
    return {
      studenti: [
        {
          ime: "Perica",
          broj_indexa: 1234,
        },
        {
          ime: "Lucija",
          broj_indexa: 1264,
        },
        {
          ime: "Daniel",
          broj_indexa: 4321,
        },
      ],
    };
  },
};
</script>

<style></style>
