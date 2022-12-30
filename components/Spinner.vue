<template>
  <div class="spin"></div>  
</template>

<style scoped>
  .spin {
    display: block;
    height: 50px;
    width: 50px;
    border: 6px solid transparent;
    margin: 0 auto;
    border-top-color: var(--primary);
    border-radius: 50%;
    animation: spin 1s ease infinite;
  }

  @keyframes spin {
    to { transform: rotateZ(360deg);}
  }
</style>