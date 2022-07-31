<template>
  <div class="lrc-player-container">
    <AudioPlayer
      v-model:duration="duration"
      v-model:pause="pause"
    />

    <LrcPlayer
      :duration="duration"
      :pause="pause"
    />
  </div>
</template>

<script setup lang="ts">
import AudioPlayer from './AudioPlayer.vue'
import LrcPlayer from './LrcPlayer.vue'

const duration = ref(0)
const pause = ref(true)
</script>
