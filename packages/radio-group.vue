<template>
    <div class="cj-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'CjRadioGroup',
    props:{
        value:null
    },
    provide(){
        return {
            RadioGroup:this
        }
    }
}
</script>
<style lang="scss">
    
</style>