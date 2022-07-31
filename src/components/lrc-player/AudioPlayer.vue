<template>
  <div class="audio-wrapper">
    <audio
      ref="audioRef"
      :src="music"
      controls
      loop
      @timeupdate="handleTimeupdate"
      @pause="handleSwitchStatus(true)"
      @play="handleSwitchStatus(false)"
    />
  </div>
</template>

<script setup lang="ts">
import music from '@/assets/music/1.mp3'

const props = withDefaults(defineProps<{
  duration: number;
  pause: boolean;
}>(), {
  duration: 0,
  pause: true
})

const emits = defineEmits<{
  (e: 'update:duration', value: number): void;
  (e: 'update:pause', value: boolean): void;
}>()

const audioRef = ref<HTMLAudioElement>()

const handleTimeupdate = () => {
  emits('update:duration', (audioRef?.value?.currentTime || 0) * 1000)
}

const handleSwitchStatus = (isPause: boolean) => {
  emits('update:pause', isPause)
}
</script>
