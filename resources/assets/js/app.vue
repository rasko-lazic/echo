<template>
    <h1 v-text="data.message"></h1>
</template>

<script>
    export default {
        data: function () {
            return {
                data: {
                    message: 'Hello vue'
                }
            }
        }
    }
</script>