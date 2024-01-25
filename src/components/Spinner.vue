<script setup>

</script>

<template>
  <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div class="spinner"></div>
      <p class="text-center mt-2 text-white">Loading...</p>
  </div>
</template>

<style scoped>
    .spinner {
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #dbdcef #0000;
  animation: spinner-e04l1k 1s infinite linear;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  margin: 2.2px;
  border: inherit;
  border-radius: 50%;
}

.spinner::before {
  border-color: #474bff #0000;
  animation: inherit;
  animation-duration: 0.5s;
  animation-direction: reverse;
}

.spinner::after {
  margin: 8.9px;
}

@keyframes spinner-e04l1k {
  100% {
    transform: rotate(1turn);
  }
}
</style>