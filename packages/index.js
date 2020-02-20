import Button from './button.vue'
import Input from './input.vue'
import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'
import Switch from './switch.vue'
import Checkbox from './checkbox.vue'
import CheckboxGroup from './checkbox-group.vue'
import Dialog from './dialog.vue'

const components = [
    Button,
    Input,
    Radio,
    RadioGroup,
    Switch,
    Checkbox,
    CheckboxGroup,
    Dialog
]

const install = function(Vue){
    components.forEach((item)=>{
        Vue.component(item.name,item)
    })
}

// 判断是否是直接引入文件，如果是，就不用了调用Vue.use()
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}


export default {
    install
}