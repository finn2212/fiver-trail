<script setup>
const navItems = [
  {
    label: "Events",
    to: "/",
    subItems: [
      {
        title: "HR Administration",
        items: [
          "Compensation 360°",
          "Corporate Health Management",
          "HCM Suite",
          "HRM Administration",
          "HR Tech & AI",
          "SAP Solution Day",
        ],
      },
      {
        title: "HR Entwicklung",
        items: [
          "Digital Learning",
          "People Analytics",
          "Retention- und Performance Management",
          "Future of Work",
          "Empowering Diversity",
          "Workforce Development",
        ],
      },
      {
        title: "HR Beschaffung",
        items: ["Recruiting Reloaded"],
      },
    ],
  },
  {
    label: "Wissens Blog",
    to: "/",
  },
  {
    label: "Podcast",
    to: "/",
  },
  {
    label: "Kontakt",
    to: "/",
  },
  {
    label: "Für Service-Provider",
    to: "/",
  },
];
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50 py-6">
    <div class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
      <nav class="w-full flex justify-between items-center relative">
        <!-- logo -->
        <div class="min-w-max inline-flex relative">
          <NuxtLink to="/" class="relative flex items-center gap-3">
            <img src="/images/logo.png" alt="logo" class="h-8 sm:h-10 lg:h-12 w-auto object-contain" width="32"
              height="32" />
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <div class="hidden lg:flex bg-white rounded-full px-6 py-2 shadow-md">
          <ul class="flex gap-x-6 text-lg font-medium">
            <li v-for="(item, index) in navItems" :key="index" class="relative group">
              <NuxtLink :to="item.to" class="text-primary hover:text-secondary">
                {{ item.label }}
              </NuxtLink>
              <div v-if="item.subItems"
                class="absolute left-0 top-full mt-2 w-64 bg-gradient-to-b from-[#96B4FF] to-[#4165BF] text-white p-4 rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <template v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                  <h4 v-if="subItem.title" class="font-bold text-sm capitalize mb-2">
                    {{ subItem.title }}
                  </h4>
                  <ul v-if="subItem.items" class="space-y-1 text-xs mb-4">
                    <li v-for="(subItemContent, subItemIndex) in subItem.items" :key="subItemIndex">
                      {{ subItemContent }}
                    </li>
                  </ul>
                </template>
              </div>
            </li>
          </ul>
        </div>

        <div class="min-w-max flex items-center gap-x-3 lg:hidden">
          <button class="outline-none w-7 h-auto flex flex-col relative">
            <Icon name="ion:menu-outline" class="text-white" size="32" />
          </button>
        </div>
      </nav>
    </div>
  </header>

</template>
