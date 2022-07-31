<template>
  <div class="lrc-player">
    <div
      class="lrc-wrapper"
    >
      <div
        v-for="item of currentData"
        :key="item.startTime"
        class="lrc-row"
      >
        <div
          v-for="text of item.children"
          :key="item.startTime + '-' + text.startTime"
          class="text"
          :class="getStatus(text, item.startTime)"
        >
          <LrcPlayerStar
            :duration="text.duration"
            :class="getStatus(text, item.startTime)"
          />
          <div
            class="placeholder"
            :style="{
              opacity: 0
            }"
            v-html="text.text"
          ></div>
          <div
            class="text-bg"
            :style="{
              animationDuration: text.duration + 'ms',
              animationPlayState: pause ? 'paused' : ''
            }"
            v-html="text.text"
          ></div>
          <div
            class="text-fg"
            :class="getStatus(text, item.startTime)"
            v-html="text.text"
            :style="{
              animationDuration: text.duration + 'ms',
              animationPlayState: pause ? 'paused' : ''
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import text from '@/config/lrc'
import { text2tree } from '@/utils/tools'

import LrcPlayerStar from './LrcPlayerStar.vue'

const STATUS_TYPE = {
    DEFAULT: 'default',
    OUTDATED: 'outdate',
    ACTIVE: 'active'
  }

const props = withDefaults(defineProps<{
  duration: number;
  pause: boolean;
}>(), {
  duration: 0,
  pause: true
})

const lrcData = ref(text2tree(text))
const firstRowData = ref<LrcItem>(lrcData.value[0])
const lastRowData = ref<LrcItem>(lrcData.value[1])


const currentData = computed(() => {
  return [firstRowData.value, lastRowData.value]
})

const getStatus = (data: ChildItem, parentStartTime: number) => {
  if (props.duration > parentStartTime + data.startTime) {
    if (props.duration <= parentStartTime + data.startTime + data.duration) {
      return STATUS_TYPE.ACTIVE
    }
    
    return STATUS_TYPE.OUTDATED
  }

  return STATUS_TYPE.DEFAULT
}

// 取两行数据给 currentData 用于渲染
const handleDurationChange = (duration: number) => {
  if (duration === 0) {
    firstRowData.value = lrcData.value[0]
    lastRowData.value = lrcData.value[1]
    return
  }

  console.log('currentDuration', duration)

  const item = lrcData.value.find(item => item.startTime >= duration && !currentData.value.includes(item))
  if (item && duration > firstRowData.value.startTime + firstRowData.value.duration) {
    firstRowData.value = item
    return
  }
  if (item && duration > lastRowData.value.startTime + lastRowData.value.duration) {
    lastRowData.value = item
  }
}

watch(
  () => props.duration,
  handleDurationChange,
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.lrc-player {
  position: relative;
  width: 1100px;
  padding: 50px;
  background-color: rgba($color: #000000, $alpha: 0.1);
  box-sizing: border-box;
}

.lrc-wrapper {
  position: relative;
  width: 1000px;
  height: 200px;

  .lrc-row {
    display: flex;
    align-items: center;
    position: absolute;
    height: 50px;
    line-height: 50px;
    font-size: 50px;
    font-weight: 700;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    &:first-child {
      left: 0;
      bottom: 100px;
    }

    &:last-child {
      right: 0;
      bottom: 0;
    }

    .text {
      position: relative;

      .text-bg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        transform-origin: center bottom;
        overflow: hidden;
      }

      .text-fg {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 100%;
        transform-origin: center bottom;
        overflow: hidden;
      }
      
      &.active {
        .text-bg  {
          animation-name: activeBgAni;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }

        .text-fg {
          background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#2E64EC) , to(#00D5F0));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation-name: activeAni;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      }

      &.outdate {
        .text-fg {
          width: 100%;
          background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#2E64EC) , to(#00D5F0));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}

@keyframes activeAni {
  0% {
    width: 0;
    transform: scaleY(0.3);
  }

  40% {
    width: 40%;
    transform: scaleY(1);
  }

  100% {
    width: 100%;
    height: 100%;
  }
}

@keyframes activeBgAni {
  0% {
    transform: scaleY(0.3);
  }

  40% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(1);
  }
}
</style>
