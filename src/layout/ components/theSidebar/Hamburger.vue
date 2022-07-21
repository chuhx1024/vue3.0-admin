<template>
    <div class="Hamburger-container" @click="store.TOGGLE_SIDEBAR">
        <el-icon><Fold /></el-icon>
    </div>
</template>

<script lang='ts' setup>
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>
