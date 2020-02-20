<template>
  <transition name="dialog-fade">
    <div class="cj-dialog__wrapper" @click.self="close" v-show="visible">
      <div class="cj-dialog" :style="{width:width,marginTop:top}">
        <div class="cj-dialog__header">
          <slot name="title">
            <span>{{title}}</span>
          </slot>
          <button class="cj-dialog__headerbth" @click="close">
            <i class="cj-icon__close"></i>
          </button>
        </div>
        <div class="cj-dialog__body">
          <slot></slot>
        </div>
        <div class="cj-dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "CjDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    visible: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    }
  }
};
</script>
<style lang="scss">
.cj-dialog__wrapper {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  .cj-dialog {
    background-color: #fff;
    margin: auto;
  }
}
.dialog-fade-enter-active{
    animation: fade 0.5s;
}
.dialog-fade-leave-active{
    animation: fade 0.5s reverse;
}
@keyframes fade {
    0%{
        opacity: 0;
        transform: translateY(-20px)
    }
    100%{
        opacity: 1;
        transform: translateY(0px)
    }
}
</style>