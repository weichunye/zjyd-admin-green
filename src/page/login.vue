<template>
	<div class="login">
    <div class="pre-box content">
      <h2>互动教学登录</h2>
      <div class="login-box">
        <el-form :model="loginForm" ref="loginForm" label-width="100px" class="demo-dynamic">
          <el-form-item
            label="用户名"
            :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' },]"
          >
            <el-input @keyup.enter.native="toLogin('loginForm')" v-model="loginForm.name"></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },]"
          >
            <el-input @keyup.enter.native="toLogin('loginForm')" v-model="loginForm.passWord"></el-input>
          </el-form-item>
        </el-form>
        <div @click="toLogin('loginForm')" class="btn-submit">登 录</div>
      </div>
    </div>

	</div>
</template>

<script>
	export default {
		name: 'Login',
		components: {


		},
		data() {
			return {
        loginForm:{
          name:'',
          passWord:''
        }
      }
		},
      computed:{

      },
		mounted() {


		},
		methods: {
      toLogin(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log("this.loginForm.name",this.loginForm.name)
            if(this.loginForm.name=="ls"){
              this.$router.push('/enter');
            }
            if(this.loginForm.name=="xs"){
              this.$router.push('/my-course');
            }
            if(this.loginForm.name=="yx"){
              this.$router.push('/collegesmant');
            }
            if(this.loginForm.name=="pt"){
              this.$router.push('/platformmant');
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
	}
</script>
<style lang="less">
	.login {
    .content {
      overflow: hidden;
      margin-top: 15px;
      min-height: 600px;
      background: #fff;
      h2{
        margin: 20px 0;
        width: 100%;
        font-size: 26px;
        color: #398f3b;
        text-align: center;
      }
      .login-box{
        margin: 50px auto;
        padding: 50px;
        width: 400px;
        height: 200px;
        background: -moz-linear-gradient(top, #b5cadc 40%, #ccd5dc 100%);
        background: -webkit-linear-gradient(top,  #b5cadc 40%, #ccd5dc 100%);
        background: -o-linear-gradient(top,  #b5cadc 40%, #ccd5dc 100%);
        background: -ms-linear-gradient(top,  #b5cadc 40%, #ccd5dc 100%);
        background: linear-gradient(top,  #b5cadc 40%, #ccd5dc 100%);
        border-radius: 15px;

      }
      .btn-submit{
      margin: 50px 0 0 100px;
        width: 300px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        color: #fff;
        text-align: center;
        background: #f69d29;
        border-radius: 5px;
        cursor: pointer;
      }

    }
  }

</style>
