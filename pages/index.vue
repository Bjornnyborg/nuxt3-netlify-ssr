<template>
  <div>
    <h1>{{ data.title.rendered }}</h1>
    <div>{{ data.modified }}</div>
  </div>
</template>

<script setup lang="ts">
import { getUrl } from "../content";

const { data } = await useFetch(getUrl());
</script>
