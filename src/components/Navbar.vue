<template>
  <div class="flex justify-between py-6 px-8">
    <div class="flex items-center gap-24">
      <img src="../assets/images/logo.svg" alt="Logo" />
      <ul class="flex gap-8">
        <li
          class="relative"
          @mouseenter="show = true"
          @mouseleave="show = false"
        >
          <button
            class="flex gap-2 font-epilogue font-medium text-mediumgray hover:text-black"
          >
            Features
            <img
              src="../assets/images/icon-arrow-down.svg"
              alt="Dropdown"
              class="w-2 h-1 mt-2.5"
              :class="{ 'rotate-180': show }"
            />
          </button>

          <div
            v-if="show"
            class="absolute top-full bg-white shadow-xl rounded-md w-36 right-0 py-4 px-4"
          >
            <a
              href="#"
              class="flex items-center gap-3 font-epilogue font-medium text-mediumgray hover:text-black"
            >
              <img src="../assets/images/icon-todo.svg" alt="Todo Icon" />
              <span>Todo List</span>
            </a>
            <a
              href="#"
              class="flex items-center gap-3 py-1 font-epilogue font-medium text-mediumgray hover:text-black"
            >
              <img
                src="../assets/images/icon-calendar.svg"
                alt="Calendar Icon"
                class="w-4 h-4"
              />
              <span>Calendar</span>
            </a>
            <a
              href="#"
              class="flex items-center gap-3 py-1 font-epilogue font-medium text-mediumgray hover:text-black"
            >
              <img
                src="../assets/images/icon-reminders.svg"
                alt="Reminders Icon"
                class="w-4 h-4"
              />
              <span>Reminders</span>
            </a>
            <a
              href="#"
              class="flex items-center gap-3 py-1 font-epilogue font-medium text-mediumgray hover:text-black"
            >
              <img
                src="../assets/images/icon-planning.svg"
                alt="Planning Icon"
                class="w-4 h-4"
              />
              <span>Planning</span>
            </a>
          </div>
        </li>
        <li
          class="relative"
          @mouseenter="showcompany = true"
          @mouseleave="showcompany = false"
        >
          <button
            class="flex gap-2 font-epilogue font-medium text-mediumgray hover:text-black"
          >
            Company
            <img
              src="../assets/images/icon-arrow-down.svg"
              alt="Dropdown"
              class="w-2 h-1 mt-2.5"
              :class="{ 'rotate-180': showcompany }"
            />
          </button>

          <div
            v-if="showcompany"
            class="absolute top-full bg-white shadow-xl rounded-md w-28 left-0 py-4 px-4"
          >
            <a
              href="#"
              class="flex items-center gap-3 font-epilogue font-medium text-mediumgray hover:text-black"
            >
              <span>History</span>
            </a>
            <a
              href="#"
              class="flex items-center gap-3 py-1 font-epilogue font-medium text-mediumgray hover:text-black"
            >
              <span>Our Team</span>
            </a>
            <a
              href="#"
              class="flex items-center gap-3 py-1 font-epilogue font-medium text-mediumgray hover:text-black"
            >
              <span>Blog</span>
            </a>
          </div>
        </li>
        <li class="font-epilogue font-medium text-mediumgray hover:text-black">
          <a href="#"> Careers </a>
        </li>
        <li class="font-epilogue font-medium text-mediumgray hover:text-black">
          <a href="#"> About </a>
        </li>
      </ul>
    </div>
    <div class="flex items-center gap-10">
      <button
        class="py-1 px-3 rounded-xl border-2 border-transparent hover:border-black font-epilogue font-medium"
      >
        Login
      </button>
      <button
        class="py-1 px-3 rounded-xl border-2 border-transparent hover:border-black font-epilogue font-medium"
      >
        Register
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
const showcompany = ref(false);
</script>
