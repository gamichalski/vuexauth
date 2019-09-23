<template>
  <div class="home">
    <input v-model="form.username"/>
    <input v-model="form.password"/>
    <button @click="submit(form)">Entrar</button>
    <button @click="LOGOUT">{{fullname()}}</button>
    <button @click="getAll">Chamar</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import axios from 'axios';

const domain = 'https://pf5t4massb.execute-api.sa-east-1.amazonaws.com/dev';

export default {
  name: 'home',
  data() {
    return {
      form: { username: 'g.amichalski@gmail.com', password: 'admin@123' },
    };
  },
  methods: {
    ...mapActions(['login']),
    ...mapMutations(['LOGOUT']),
    fullname() {
      console.log('teste');
    },
    async submit(form) {
      await this.login(form);
      this.$router.push({ name: 'about' });
    },
    async getAll() {
      await axios.get(`${domain}/users`);
    },
  },
};
</script>
