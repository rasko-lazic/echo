<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">Select a developer</div>
            <div class="panel-body">
                <div v-for="(dev, index) in devs">
                    <span v-text="dev.name" @click="openChannel(index)"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data: function () {
            return {
                devs: []
            }
        },

        methods: {
            fetchDevs: function () {
                var self = this;
                self.$http.get('/api/devs').then((response) => {
                    self.devs = response.body;
                }, (response) => {
                    console.log('Connection failed');
                });
            },

            openChannel: function (index) {
                var self = this;
                self.$http
            }
        },

        mounted: function () {
            console.log('mounted');
            this.fetchDevs();
        }
    }
</script>