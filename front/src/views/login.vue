<template>
    <el-row>
        <el-col :span="12" :offset="6" class="box">
            <h3 class="title">用户登陆</h3>
            <div>
                <label>用户名</label>
                <el-input v-model="username"  placeholder="请输入用户名" ></el-input>
            </div>
            <div>
                <label>密码</label>
                <el-input v-model="userpass" type="password" placeholder="请输入密码"></el-input>
            </div>
            <div>
                <button @click="login">登陆</button>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data (){
        return {
            'username':'',
            'userpass':''

        }
    },
    methods:{
        login(){
            console.log(this.$http);
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
