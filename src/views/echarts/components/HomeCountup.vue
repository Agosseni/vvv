<template>
    <span ref="countRef"></span>
</template>

<script setup>
import { onMounted,  ref, watch, defineProps } from 'vue';
import { CountUp } from 'countup.js';

// 定义组件的 props
const props = defineProps({
    end: Number,
    options: Object
});

const countRef = ref(null);
let countUp;

onMounted(() => {
    if (countRef.value) {
        countUp = new CountUp(countRef.value, props.end, props.options);
        if (countUp.error) {
            console.error(countUp.error);
            return;
        }
        countUp.start();
    }
});

watch(() => props.end, (newVal) => {
    if (countUp) {
        countUp.update(newVal);
    }
});
</script>