<template>
  <div class="el-search" :class="{'simple':!simple}" :style="{width:width+'px'}">
     <el-input :placeholder="placeholder" v-model="val" clearable  @clear='clear' >
      <i slot="prefix" class="el-input__icon el-icon-search"  v-if='simple'></i>
     <el-button slot="append" icon="el-icon-search" v-if='!simple' type="primary" @click='clickInput'></el-button>
    </el-input>
  </div>
</template>

<script>


export default {
  name: 'ElSearch',

  props:{
    width:Number,
    placeholder:String,
    simple:Boolean
  },

  data(){
   return{
     val:''
   }
  },

  methods:{
    clickInput(){
      let vm=this;
      vm.$emit('search',this.val)
    },

    clear(){
      let vm=this;
      vm.$emit('clear')
    },
  },

  components:{
    
  },
};
</script>
