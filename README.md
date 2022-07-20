# Vue 3 + TypeScript + Vite + Pinia + VueRouter 的后台管理系统

## 1. 项目初始化
```sh
yarn create vite
```

## 2. Vs code 插件
- 禁用 Vetur
- 安装 Vue Language Features (Volar)  [参考版本]v0.38.9P
- 安装 TypeScript Vue Plugin (Volar)  [参考版本]v0.38.9

## 3. 解决原始项目 template 中 ts 报错

```js
// JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.ts(7026)
// tsconfig.json
{
  "compilerOptions": {
    "noImplicitAny": false, // 是否在表达式和声明上有隐含的any类型时报错
  }
}
```
```js
// Cannot find module '@vitejs/plugin-vue' or its corresponding type declarations.ts(2307)
// 修改 Vscode 配置 
- command + shift + p 
- 输入 Volar : Select TypeScript Verison  --> workSpack Version  
- 
```


## 4. 项目配置 Eslint + Prrttier
```sh
npm i -D eslint
yarn eslint --init
```