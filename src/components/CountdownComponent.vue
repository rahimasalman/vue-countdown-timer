<template>
  <div class="countdown-timer">
    <svg class="countdown-svg" viewBox="0 0 50 50">
      <circle
          class="countdown-circle-elapsed"
          cx="25"
          cy="25"
          r="22.5"
      ></circle>
      <circle
          class="countdown-circle-remaining"
          cx="25"
          cy="25"
          r="22.5"
          :style="circleStyle"
      ></circle>
    </svg>
    <div class="countdown-label">{{ remainingTime }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remainingTime: this.initialTimeLeft,
      radius: 22.5,
      intervalId: null,
    };
  },
  props: {
    totalTime: {
      type: Number,
      default: 30
    },
    initialTimeLeft: {
      type: Number,
      default: 30
    }
  },
  computed: {
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    circleStyle() {
      const dashOffset = (1 - this.remainingTime / this.totalTime) * this.circumference;
      return {
        strokeDasharray: `${this.circumference} ${this.circumference}`,
        strokeDashoffset: dashOffset,
        transition: 'stroke-dashoffset 1s linear',
      };
    },
  },
  methods: {
    startCountdown() {
      if (this.intervalId) return; // Avoid multiple intervals
      this.remainingTime = this.totalTime; // Reset remainingTime to totalTime

      this.intervalId = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime -= 1;
        } else {
          this.clearInterval();
          this.$emit('completed');
        }
      }, 1000);
    },
    clearInterval() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
  },
  watch: {
    initialTimeLeft(newTime) {
      this.remainingTime = newTime;
    },
    totalTime(newTotal) {
      if (this.remainingTime > newTotal) {
        this.remainingTime = newTotal;
      }
    }
  },
  beforeDestroy() {
    this.clearInterval();
  },
};
</script>

<style scoped lang="scss">
.countdown-timer {
  position: relative;
  border-radius: 50%;
  padding: 8.5px;
  width: 45px;
  height: 45px;
  transition: border 1s linear;
}

.countdown-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.countdown-circle-elapsed {
  fill: none;
  stroke: #fff;
  stroke-width: 7px;
}

.countdown-circle-remaining {
  fill: none;
  stroke: #4296fd;
  stroke-width: 4px;
  transition: stroke-dashoffset 1s linear;
  transform: rotate(90deg);
  transform-origin: 50% 50%;

}

.countdown-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: #4296fd;
  font-weight: 800;
  line-height: 16.94px;
  text-align: center;

}
</style>