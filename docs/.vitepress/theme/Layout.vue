<script setup>
import DefaultTheme from "vitepress/theme";
import { onMounted, onUnmounted } from "vue";
import SiteCat from "./integrations/SiteCat.vue";
import SiteComments from "./integrations/SiteComments.vue";

let dockedSidebar;
function closeDrawerOnDock(event) {
  if (event.matches) document.querySelector(".Layout > .VPBackdrop")?.click();
}

onMounted(() => {
  dockedSidebar = window.matchMedia("(min-width: 900px)");
  dockedSidebar.addEventListener("change", closeDrawerOnDock);
});
onUnmounted(() => dockedSidebar?.removeEventListener("change", closeDrawerOnDock));
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after><SiteComments /></template>
    <template #layout-bottom><SiteCat /></template>
  </DefaultTheme.Layout>
</template>
