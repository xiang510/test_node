<template>
    <el-row>
        <el-col :span="12" :offset="6" class="box">
            <h3 class="title">用户注册</h3>
            <div>
                <label>用户名</label>
                <el-input v-model="name"  placeholder="请输入用户名" ></el-input>
            </div>
            <div>
                <label>密码</label>
                <el-input v-model="passnum1" type="password" placeholder="请输入密码"></el-input>
            </div>
            <div>
                <label>确认密码</label>
                <el-input v-model="passnum2" type="password" placeholder="请确认密码"></el-input>
            </div>
            <div>
                <button @click="register()">注册</button>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data (){
        return {
            'name':'',
            'passnum1':'',
            'passnum2':''
        }
    },
    methods:{
        register (){
            if(this.name && this.passnum1 && this.passnum2 && (this.passnum1 === this.passnum2)){
                var obj = {
                    'username':this.name,
                    'password':this.passnum1
                }
                this.$http.post('/api/register',obj).then((res)=>{
                    console.log(res);
                },(err)=>{
                    console.log(err);
                })
            }else {
                alert('请输入正确注册的信息');
            }
        }
    }
}


</script>

<style scope>
    .box {
        margin-top:200px;
        border:2px solid #0caebb;
        border-radius:20px;
        padding:20px 
    }
    .title {
        text-align:center;
        color:#0198b7;
    }
    .box label {
        color:#0198b7;
    }
    .box button {
        width:100%;
        height: 35px;
        margin-top:20px;
        border-radius:5px;
        background-color:#0caebb;
        color:#fff;
        border:none;
        outline: none;  
    }
</style>