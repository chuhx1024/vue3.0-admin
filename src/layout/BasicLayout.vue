<template>
    <div class="basicLayout-container">
        <el-container>
            <the-sidebar />
            <el-container>

                <el-header>
                    <the-header />
                </el-header>
                <the-main-app />

            </el-container>
        </el-container>
    </div>
</template>

<script lang='ts' setup>
import TheSidebar from './ components/theSidebar/index.vue'
import TheHeader from './ components/theHeader/index.vue'
import TheMainApp from './ components/theMainApp/index.vue'

</script>
<style lang="scss" scoped>
// .basicLayout-container {
//     // background-color: pink;
// }
</style>
