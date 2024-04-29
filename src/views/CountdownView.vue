<script>
import CountdownComponent from "@/components/CountdownComponent.vue";
export default {
  name: "CountdownView",
  components: {
    CountdownComponent
  },
  data() {
    return {
      isCountingDown: false
    };
  },
  methods: {
    startCountdown() {
      this.isCountingDown = true;
      this.$refs.countdownTimer.startCountdown();
    },
    handleCountdownCompleted() {
      this.isCountingDown = false;
    }
  },
}
</script>

<template>
  <div class="confirmation-time-and-button">
    <countdown-component
        :total-time="30"
        :initial-time-left="30"
        v-show="isCountingDown"
        class="confirmation-countdown"
        ref="countdownTimer"
        @completed="handleCountdownCompleted"
    />
    <button class="confirmation-button"
            :class="isCountingDown ? 'disabled' : '' "
            @click.stop="startCountdown"
            :disabled="isCountingDown">
      Start Timer
    </button>
  </div>
</template>
<style scoped lang="scss">
.confirmation-time-and-button {
  display: flex;
  justify-content: center;

  .confirmation-button {
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #4296fd;
    background-color: #4296fd;
    color: #fff;
    cursor: pointer;
  }

  .disabled {
    border-radius: 8px;
    border: 1px solid #a9a9a9;
    background-color: #fff;
    color: #a9a9a9;
    cursor: not-allowed;
  }

  .confirmation-time {
    border-radius: 50%;
    border: 3px solid #4296fd;
    padding: 8.5px 5px 7.5px 8.5px;
    transition: border 1s linear;
  }
  button:disabled {
    border-radius: 8px;
    border: 1px solid #a9a9a9;
    background-color: #fff;
    color: #a9a9a9;
    cursor: not-allowed;
  }

}
</style>