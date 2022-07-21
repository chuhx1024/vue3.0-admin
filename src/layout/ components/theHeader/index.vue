<template>
    <div class="header-container">
        <hamburger />
    </div>
</template>

<script lang='ts' setup>
import Hamburger from '../theSidebar/Hamburger.vue'
</script>
<style lang="scss" scoped>
.header-container {
    height: 100%;
    line-height: 60px;
    border-bottom: 1px solid #ccc;
}
</style>
