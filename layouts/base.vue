<template>
  <section class="mx-auto max-w-screen-md bg-slate-100">
    <Navbar :is-category="true" :title="'Kategori'" />
    <div class="min-h-screen">
      <slot />
    </div>
    <BottomMenu />
  </section>
</template>