<template>
    <section>
        <h2>{{ topicTitle }}</h2>
        <p>{{ text }}</p>
    </section>
</template>

<script>
export default {
    props: {
        topicTitle: {
            type: String
        },
        text: {
            type: String
        }
    },
    data ()
    {
        return {}
    }
}
</script>