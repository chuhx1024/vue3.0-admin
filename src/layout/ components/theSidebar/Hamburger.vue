<template>
    <div class="hamburger-container" @click="store.TOGGLE_SIDEBAR">
        <el-icon>
            <Expand v-if="sidebar.opened"/>
            <Fold v-else/>
        </el-icon>
    </div>
</template>

<script lang='ts' setup>
import { useAppStore } from '@/store/app'
import { storeToRefs } from 'pinia'
const store = useAppStore()
// 如果解构 就没有响应式了 需要借助 storeToRefs
const { sidebar } = storeToRefs(store)
</script>
<style lang="scss" scoped>
.hamburger-container {
    margin-left: 10px;
    font-size: 24px;
    display: inline-block;
    cursor: pointer;
    padding:0 10px;
    box-sizing: border-box;
    &:hover {
        color: blue;
    }
}
</style>
