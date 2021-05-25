<template>
  <div>
    <div style="min-height: 4px;" v-if="show">
      <v-progress-linear indeterminate color="cyan"></v-progress-linear>
    </div>

    <v-btn depressed color="primary" class="btn-potvrdi" @click="showProgress">
      Prikaži progress bar
    </v-btn>

    <v-text-field
      label="Unesite nešto"
      v-model="value"
      @input="showInput"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      //Podaci

      show: false,
      value: "",
      prime: false,
    };
  },

  methods: {
    showProgress() {
      this.show = !this.show;

      setTimeout(() => {
        this.show = !this.show;
      }, 5000);
    },

    showInput() {
      console.log(this.value);

      //parseInt() => pretvara string u broj
      //Number.isInteger => provjerava da li je vrijednost broj
      //this.$router.push() => vodi nas na željenu lokaciju, potrebno je unijeti objekt sa imenom naše komponente (ime smo zadali u routeru)
      //u ovom slučaju smo stavili {name: "Forma"}

      if (Number.isInteger(parseInt(this.value)) && parseInt(this.value) > 1) {
        if (this.value == 2) {
          this.$router.push({ name: "Forma" });
        }

        for (var i = 2; i < this.value; i++) {
          if (this.value % i === 0) {
            // 5 / 2 = 2 => 1
            this.prime = false;
            break;
          } else {
            this.prime = true;
          }
        }

        if (this.prime) {
          this.$router.push({ name: "Forma" });
        }
      }
    },
  },
};
</script>

<style scoped>
.btn-potvrdi {
  margin-top: 100px;
  margin-left: 10px;
  margin-bottom: 130px;
}
</style>
