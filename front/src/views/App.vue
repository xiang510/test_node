<template>
  <div id="app" class="container">
    <v-header></v-header>
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="grid-content main-content">
          从前有一天，一个小男孩仰望着满天星空，盯着一个闪亮致极的星星发呆，心里默默的思量着‘星空好美，我长大了要当天文学家’。白驹过隙，星空还是那片星空，当年仰望星空的人身在何方？时过境迁，星梦是否还在？让我们在这里重拾旧梦，不忘初心，继续前行。。。
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scope>

.main-content {
  
  border-radius:20px;
  border:2px solid #008aad;
  height:200px;
  margin-top:200px;
  background:rgba(0,0,0,.6);
  color:#fff;
  line-height:35px;
  text-indent:32px;
  padding:30px 20px 0;
}
</style>
