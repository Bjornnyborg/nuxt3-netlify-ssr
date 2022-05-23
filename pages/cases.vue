<template>
  <div>
    <h1>{{ data[0].title.rendered }}</h1>
    <div>{{ data[0].modified }}</div>
  </div>
</template>

<script setup lang="ts">
import { getUrl } from "../content";

const { data } = await useFetch(getUrl());
</script>
