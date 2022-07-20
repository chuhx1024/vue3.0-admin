<template>
    <div class="basicLayout-container">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang='ts' setup></script>
<style lang="scss" scoped>
.basicLayout-container {
    background-color: pink;
}
</style>
