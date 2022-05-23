<template>
  <div>
    <Html lang="en-US">
      <Head>
        <Title>Title </Title>
        <Meta name="description" content="description" />
      </Head>
    </Html>

    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/cases">Cases</nuxt-link>

    <NuxtPage />
  </div>
</template>

<style>
body {
  text-align: center;
}

a {
  margin: 30px;
  padding: 30px 0;
  display: inline-block;
}
</style>
