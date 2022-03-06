<template>
    <h1 v-text="tempDir"></h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import * as os from '@tauri-apps/api/os'
import * as fs from '@tauri-apps/api/fs'
import * as path from '@tauri-apps/api/path'

export default defineComponent({
    components: {
        HelloWorld,
    },
    setup() {
        const tempDir = ref('Hello.')
        const count = ref(0)
        const setTempDir = async () => {
            const dir = await path.appDir()
            tempDir.value = dir
        }

        setTempDir()

        setInterval(async () => {
            count.value++
            const file: fs.FsTextFileOption = {
                contents: JSON.stringify({ number: count.value }),
                path: 'tempData.json',
            }
            const option: fs.FsOptions = {
                dir: fs.BaseDirectory.App,
            }
            console.log(`Try to save to ${file.path}`)
            await fs.writeFile(file, option)
        }, 1000)

        return {
            tempDir,
        }
    },
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
