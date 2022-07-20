import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// 路径查找
const pathResolve = (dir: string): string => {
    return resolve(__dirname, '.', dir)
}

// 设置别名
const alias: Record<string, string> = {
    '@': pathResolve('src')
}

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias
    },
    plugins: [
        vue(),
        // 增加下面的配置项,这样在运行时就能检查eslint规范
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ]
})
