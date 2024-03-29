<template>
  <span>{{ displayValue }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
  startVal: {
    type: Number,
    required: false,
    default: 0
  },
  endVal: {
    type: Number,
    required: false,
    default: 2017
  },
  duration: {
    type: Number,
    required: false,
    default: 3000
  },
  autoplay: {
    type: Boolean,
    required: false,
    default: true
  },
  decimals: {
    type: Number,
    required: false,
    default: 0,
    validator(value: number) {
      return value >= 0;
    }
  },
  decimal: {
    type: String,
    required: false,
    default: '.'
  },
  separator: {
    type: String,
    required: false,
    default: ','
  },
  prefix: {
    type: String,
    required: false,
    default: ''
  },
  suffix: {
    type: String,
    required: false,
    default: ''
  },
  useEasing: {
    type: Boolean,
    required: false,
    default: true
  },
  easingFn: {
    type: Function,
    default(t: number, b: number, c: number, d: number) {
      return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
    }
  }
});
const emit = defineEmits(['callback', 'mountedCallback']);
const isNumber = (val: any) => !isNaN(parseFloat(val));
const formatNumber = (num: number | string) => {
  num = (num as number).toFixed(props.decimals);
  num += '';
  const x = num.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? props.decimals + x[1] : '';
  const rgx = /(\d+)(\d{3})/;
  if (props.separator && !isNumber(props.separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + props.separator + '$2');
    }
  }
  return props.prefix + x1 + x2 + props.suffix;
};

const localStartVal = ref(props.startVal);
const displayValue = ref(formatNumber(props.startVal));
const printVal = ref<null | number>(null);
const paused = ref(false);
const localDuration = ref(props.duration);
const startTime = ref<null | number>(null);
const timestamp = ref<null | number>(null);
const remaining = ref<null | number>(null);
const rAF = ref<null | number>(null);
const countDown = computed(() => props.startVal > props.endVal);

const count = (_timestamp: number) => {
  if (!startTime.value) startTime.value = _timestamp;
  timestamp.value = _timestamp;
  const progress = _timestamp - startTime.value;
  remaining.value = localDuration.value - progress;

  if (props.useEasing) {
    if (countDown.value) {
      printVal.value = localStartVal.value - props.easingFn(progress, 0, localStartVal.value - props.endVal, localDuration.value);
    } else {
      printVal.value = props.easingFn(progress, localStartVal.value, props.endVal - localStartVal.value, localDuration.value);
    }
  } else {
    if (countDown.value) {
      printVal.value = localStartVal.value - ((localStartVal.value - props.endVal) * (progress / localDuration.value));
    } else {
      printVal.value = localStartVal.value + (props.endVal - localStartVal.value) * (progress / localDuration.value);
    }
  }
  if (countDown.value) {
    printVal.value = (printVal.value as number) < props.endVal ? props.endVal : printVal.value;
  } else {
    printVal.value = (printVal.value as number) > props.endVal ? props.endVal : printVal.value;
  }

  displayValue.value = formatNumber(printVal.value as number);
  if (progress < localDuration.value) {
    rAF.value = requestAnimationFrame(count);
  } else {
    emit('callback');
  }
};
const start = () => {
  localStartVal.value = props.startVal;
  startTime.value = null;
  localDuration.value = props.duration;
  paused.value = false;
  rAF.value = requestAnimationFrame(count);
};

watch(() => props.autoplay, () => {
  start();
});
watch(() => props.endVal, () => {
  if (props.autoplay) start();
});

onMounted(() => {
  if (props.autoplay) start();
  emit('mountedCallback');
});

onUnmounted(() => {
  cancelAnimationFrame(rAF.value as number);
});
</script>
