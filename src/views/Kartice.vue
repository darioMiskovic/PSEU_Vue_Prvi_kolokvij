<template>
  <div>
    <v-card
      class="kartica"
      v-for="user in users"
      :key="user.id"
      max-width="344"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ user.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text>
          Pogledaj više
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      users: [],
    };
  },

  created() {
    this.axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        this.users = response.data;
      });
  },
};
</script>

<style scoped>
.kartica {
  display: inline-block;
  margin: 20px;
}
</style>

<!--
LINK od API: https://jsonplaceholder.typicode.com/

Izgled podataka nakon šta smo uzeli userse sa api-a

[

    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
        lat: "-37.3159",
        lng: "81.1496"
        }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
        }
    },

    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
        lat: "-43.9509",
        lng: "-34.4618"
        }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
        }
    },

    ....

]

-->
