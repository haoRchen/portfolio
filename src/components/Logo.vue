<template>
  <svg 
    :class="{'logo': !animated, 'logo--loading': animated}"
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg">
    <rect
      class="rectangle"/>
    <text 
      class="text"
      x="36" 
      y="64">
      H
    </text>
  </svg>
</template>

<script>
export default {
  name: "Logo",
  props: {
    animated: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../main.scss";
.logo,
.logo--loading {
  width: 50px;
  height: 50px;
  background-color: transparent;
}
.logo {
  $self: &;
  &:hover {
    .text {
      fill: $white;
      animation: pulsate 1.3s ease-in infinite;
    }
    .rectangle {
      stroke: $white;
      stroke-dashoffset: 100;
      stroke-dasharray: 100, 200;
    }
  }
  &:focus {
    .rectangle {
      stroke-dasharray: 100, 300;
    }
  }
}
.text {
  stroke-width: 20px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 40px;
  opacity: 1;
  fill: $dark-grey;
  transform-origin: center;
  transition: all 0.4s ease-in-out 0s;
}
.rectangle {
  width: 100px;
  height: 100px;
  fill: transparent;
  stroke: $dark-grey;
  stroke-width: 8;
  // length, gap, length, gap
  stroke-dasharray: 0, 0, 600, 600;
  stroke-dashoffset: 100;
  transition: all 0.5s;
}
.logo--loading {
  cursor: default;
  transition: all 0.5s;
  .text {
    opacity: 0;
  }
  .rectangle {
    animation: collapse 1s linear infinite;
  }
}
@keyframes pulsate {
  0% {
    opacity: 1;
    transform: translate(0, -5px);
  }
  50% {
    opacity: 0.7;
    transform: translate(0, 5px);
  }
  100% {
    opacity: 1;
    transform: translate(0, -5px);
  }
}
@keyframes flip {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(-1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes collapse {
  0% {
    stroke-width: 8;
    stroke-opacity: 1;
  }
  50% {
    stroke-width: 20;
    stroke-opacity: 0.5;
  }
  100% {
    stroke-width: 8;
    stroke-opacity: 1;
  }
}
</style>
