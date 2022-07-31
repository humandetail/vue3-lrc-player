<template>
  <div
    class="star-container"
    :style="{
      animationDuration: `${duration}ms`
    }"
  >
    <div
      class="star-wrapper"
    >
      <svg
        class="icon-star icon-star-tail-1"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        :style="{
          animationDuration: `${duration}ms`
        }"
      >
        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
      </svg>
      <svg
        class="icon-star icon-star-tail-2"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        :style="{
          animationDuration: `${duration}ms`
        }"
      >
        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
      </svg>
      <svg
        class="icon-star icon-star-tail-3"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        :style="{
          animationDuration: `${duration}ms`
        }"
      >
        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
      </svg>
      <svg
        class="icon-star icon-star-main"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        :style="{
          animationDuration: `${duration}ms`
        }"
      >
        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  duration: number;
}>(), {
  duration: 0
})
</script>

<style lang="scss" scoped>
.star-container {
  position: absolute;
  left: -20px;
  top: -50px;
  width: 100%;
  height: 50px;
  opacity: 0;

  &.active {
    opacity: 1;
    animation-name: starWrapperAni;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    .icon-star-tail-1 {
      animation-name: starTailAni1;
    }

    .icon-star-tail-2 {
      animation-name: starTailAni2;
    }

    .icon-star-tail-3 {
      animation-name: starTailAni3;
    }

    .icon-star-main {
      animation-name: starAni;
    }
  }
}
.star-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;

  .icon-star {
    position: absolute;
    left: 0;
    transform-origin: center center;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    &.icon-star-tail-1 {
      // transform: translate(6px, 0px) rotate(0);
    }

    &.icon-star-tail-2 {
      // transform: translate(10px, 4px) rotate(0);
    }

    &.icon-star-tail-3 {
      // transform: translate(14px, -4px) rotate(0);
    }

    &.icon-star-main {
      left: 22px;
    }
  }
}
@keyframes starWrapperAni {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 1;
    transform: translateX(100%);
  }
}

@keyframes starAni {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(0.4turn);
  }
}

@keyframes starTailAni1 {
  from {
    transform: translate(16px, 0px) rotate(0);
    opacity: 0.5;
  }

  to {
    // transform: translate(20px, 2px) rotate(1turn);
    transform: translate(14px, -4px) rotate(1turn);
    opacity: 1;
  }
}

@keyframes starTailAni2 {
  from {
    transform: translate(10px, 4px) rotate(0);
    opacity: .7;
  }

  to {
    // transform: translate(18px, -4px) rotate(1turn);
    transform: translate(16px, 0px) rotate(0);
    opacity: .5;
  }
}

@keyframes starTailAni3 {
  from {
    transform: translate(14px, -4px) rotate(0);
    opacity: 1;
  }

  to {
    // transform: translate(22px, -2px) rotate(1turn);
    transform: translate(10px, 4px) rotate(1turn);
    opacity: .7;
  }
}
</style>
