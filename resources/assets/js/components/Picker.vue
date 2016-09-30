<template>
    <div>
        <button @click="fetchDevs">Show token</button><br>
        <p v-text="token" style="word-break: break-all;"></p>
        <textarea v-model="savedToken"></textarea>
        <button @click="testToken">Test token</button>
        <span v-text="reply"></span>
        <span v-for="dev in devs" v-text="dev.name"></span>
    </div>
</template>

<script type="text/babel">
    export default {
        data: function () {
            return {
                devs: [],
                token: '',
                savedToken: '',
                reply: ''
            }
        },

        methods: {
            fetchDevs: function () {
                var self = this;
                self.$http.get('/api/token/1').then((response) => {
                    self.token = response.body;
                }, (response) => {
                    // error callback
                });
            },

            testToken: function () {
                var self = this;
                var token = self.savedToken;
                self.$http.get('/api/user', {headers: {Authorization: 'Bearer ' . token}}).then((response) => {
                    self.reply = 'You are authorized';
                }, (response) => {
                    self.reply = 'You are unauthorized';
                });
            }
        }
    }
</script>