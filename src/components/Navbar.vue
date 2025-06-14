<template>
    <div class="flex justify-between py-6 px-8">
        <div class="flex gap-10 ">
            <img src="../assets/images/logo.svg" alt="Logo" />
            <ul class="flex gap-8">
                <li class="relative" @mouseenter="show = true" @mouseleave="show=false">
                    <button class="flex gap-2">
                    Features
                    <img src="../assets/images/icon-arrow-down.svg" alt="Dropdown" class="w-2 h-1 mt-3" :class="{ 'rotate-180': show }" />
                    </button>

                    <div v-if="show" class="absolute top-full py-2 px-4 bg-white ">
                        <a href="#" >Todo List</a>
                    </div>
                </li>

                <li class="flex gap-2">
                    Company
                    <img src="../assets/images/icon-arrow-down.svg" alt="Dropdown" class="w-2 h-1 mt-3" />
                </li>
                <li>Careers</li>
                <li>About</li>
            </ul>
        </div>
        <div class="flex gap-10">
            <button class="py-1 px-3 rounded-xl border-2 border-transparent hover:border-black">
                Login
            </button>
            <button class="py-1 px-3 rounded-xl border-2 border-transparent hover:border-black">
                Register
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>