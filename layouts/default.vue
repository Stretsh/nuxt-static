<template>
  <div class="justify-center w-full md:flex">
    <SideNav
      v-if="toggleOpen"
      :tabs="tabs"
      :currentRoute="currentRoute"
      @toggleOpen="toggleOpen = $event"
    />
    <div v-else class="p-8">
      <img @click="toggleOpen = true" src="/menu-open.png" class="h-7" />
    </div>
    <div class="w-full max-w-5xl max-h-screen px-12 overflow-y-auto pb-9">
      <slot />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const toggleOpen = ref(true)
const tabs =  [
        {
          title: 'Server Routes',
          path: '/server-routes',
        },

        {
          title: 'Teleports',
          path: '/teleports',
        },
        {
          title: 'Middleware',
          path: '/middleware',
        },
        {
          title: 'Nuxt on the Edge',
          path: '/edge-functions',
        },
        {
          title: 'Nuxt Loading Indicator',
          path: '/nuxt-loading-indicator',
        },
        // {
        // 	title: 'Image Optimization',
        // 	path: '/image'
        // },
        {
          title: 'Nuxt Link',
          path: '/nuxt-link-component',
        },
        {
          title: 'Nuxt Content',
          path: '/nuxt-content',
        },
        {
          title: 'Data Fetching',
          path: '/data-fetching',
        },
      ]

const currentRoute = computed(() => route.path)
const currentTab = computed(() => tabs.find(tab => tab.path === currentRoute))

</script>
