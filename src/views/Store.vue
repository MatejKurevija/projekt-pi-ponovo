<template>
    <div class="row">
        <div class="col-8">
            <cards />
            <cards />
        </div>
</template>
<script>
import cards from '@/components/cards.vue'

export default({
    name: 'Store',
    components: {
        cards,
    }
})
</script>

