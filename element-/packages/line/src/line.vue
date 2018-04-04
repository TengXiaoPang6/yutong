<template>
  <div class="el-line" :class='{"el-line-vertical":vertical,"el-line-dashed":dashed,"el-line-line2":line2,"el-line-line3":line3}'></div>
</template>

<script>
export default {
  name: 'ElLine',

  props:{
    vertical:Boolean,
    dashed:Boolean,
    line2:Boolean,
    line3:Boolean,
   }
};
</script>
