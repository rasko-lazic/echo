<template>
    <div>
        <p>This is a notification</p>
        <button @click="test">Click me</button>
    </div>
</template>

<script>
    export default {

        methods: {
            test: function () {
                console.log('ive been clicked');
            }
        },

        mounted: function () {
            console.log('mounted');
        }
    }
</script>