<template>
  <label class="cj-checkbox"
         :class="{'is-checked':isChecked}">
    <span class="cj-checkbox__input">
      <span class="cj-checkbox__inner"></span>
      <input 
        type="checkbox" 
        class="cj-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
     />
    </span>
    <span class="cj-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "CjCheckbox",
  inject:{
      CheckboxGroup:{
          default:''
      }
  },
  computed: {
      isGroup(){
          return !!this.CheckboxGroup;
      },
      model:{
          get(){
              return this.isGroup? this.CheckboxGroup.value : this.value
          },
          set(value){
              this.isGroup ? this.CheckboxGroup.$emit('input',value) : this.$emit('input',value)
          }
      },
      isChecked(){
        //   如果group包裹，判断label是否在model中
        // 如果没有group包裹，直接使用model
        return this.isGroup ? this.model.includes(this.label) : this.model
      }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
.cj-checkbox {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .cj-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cj-checkbox__inner {
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      z-index: 1;
      display: inline-block;
      box-sizing: border-box;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(1);
        width: 3px;
        transition: transform 0.15px easr-in 0.05s;
        transform-origin: center;
      }
    }
    .cj-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      left: 10px;
      bottom: 0;
      width: 0;
      height: 0;
      margin: 0;
    }
  }
  .cj-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
    font-size: 14px;
    padding-left: 10px;
  }
}
.cj-checkbox.is-checked {
  .cj-checkbox__input {
    .cj-checkbox__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .cj-checkbox__label {
    color: #409eff;
  }
}
</style>