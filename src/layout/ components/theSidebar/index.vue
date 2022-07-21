<template>
    <div class="the-sidebar-container">
        <el-aside :width="sidebar.opened? '64px': '200px'" >
            <el-menu
                default-active="2"
                router
                active-text-color="#ffd04b"
                background-color="#545c64"
                :collapse="sidebar.opened"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group>
                        <template #title><span>Group One</span></template>
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title><span>item four</span></template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="/home">
                    <el-icon><Menu /></el-icon>
                    <template #title>Navigator Two</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
                <el-menu-item index="/about">
                    <el-icon><setting /></el-icon>
                    <template #title>Navigator Four</template>
                </el-menu-item>
            </el-menu>
        </el-aside>
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
.the-sidebar-container {
    // background-color: #545c64;
    background-color: red;
    height: 100vh;
    overflow: hidden;
    .el-aside {
        transition: width 1s;

    }
}
</style>
