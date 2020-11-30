<template>
	<div class="login-cont">
    <div class="pre-box content">
      <div class="login-box">
        <div class="left">
          <img src="../assets/teacher/logo-left.jpg"/>
        </div>
        <div class="right">
          <h2>教学账号登录</h2>
          <el-form :model="loginForm" ref="loginForm" label-width="100px" class="demo-dynamic">
            <el-form-item
              label="用户名"
              :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' },]"
            >
              <el-input @keyup.enter.native="toLogin('loginForm')" placeholder="请输入用户名" v-model="loginForm.name"></el-input>
            </el-form-item>
            <el-form-item
              label="密码"
              :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },]"
            >
              <el-input type="password" @keyup.enter.native="toLogin('loginForm')" placeholder="请输入密码" v-model="loginForm.passWord"></el-input>
            </el-form-item>
          </el-form>
          <div @click="toLogin('loginForm')" class="btn-submit">登 录</div>
        </div>
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
            if(this.loginForm.name=="weichunye"){
              this.$router.push('/enter');
            }
            if(this.loginForm.name=="liufan"){
              this.$router.push('/my-course');
            }
            if(this.loginForm.name=="linyu"){
              this.$router.push('/collegesmant');
            }
            if(this.loginForm.name=="maomao"){
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
	.login-cont {
    background:url("../assets/teacher/logo-bg1.jpg")no-repeat;
    background-size:100% 100%;
    overflow: hidden;
    width:100vw;
    height:100vh;
    .pre-box{
      min-width:1100px;
      width:100%!important;
    }
    .content {
      //width:100%;
      height:100%;
      display: flex;
      display: -ms-flex; /* 兼容IE */
      align-items: center;
      justify-content: center;
      flex-direction: column;
      overflow: hidden;
      //margin-top: 15px;
      min-height: 300px;
      //height:448px;
      flex-shrink: 0; /* 2 */
      h2{
        margin: 0 0 20px;
        width: 100%;
        font-size: 22px;
        font-weight: bold;
        color: #21ca65;
        text-align: center;
      }
      .login-box{
        margin:0 auto;
        width: 640px;
        //height: 200px;
        background: rgba(227,243,233,0.3);
        border:2px solid #21ca65;
        height:448px;
        //background: -moz-linear-gradient(top, #e3f3e9 40%, #21ca65 100%);
        //background: -webkit-linear-gradient(top,  #e3f3e9 40%, #21ca65 100%);
        //background: -o-linear-gradient(top,  #e3f3e9 40%, #21ca65 100%);
        //background: -ms-linear-gradient(top,  #e3f3e9 40%, #21ca65 100%);
        //background: linear-gradient(top,  #e3f3e9 40%, #21ca65 100%);
        //border-radius: 15px;
        display: flex;
        .left{
          width:40%;
          //height:100%;
          -ms-flex: 1; /* 兼容IE */
          flex: 1;
          img{
            width:100%;
            height:100%;
          }
        }
        .right{
          width:54%;
          padding:40px 45px;
          -ms-flex: 1; /* 兼容IE */
          flex: 1;
        }
        .el-form-item__label{
          display: block;
          text-align: left;
        }
        .el-form-item__content{
          display: block;
          margin-left:0!important;
        }
        .el-form-item{
          margin-bottom:0;
        }

      }
      .btn-submit{
        margin: 20px auto;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        text-align: center;
        background: #21ca65;
        border-radius: 5px;
        cursor: pointer;
      }

    }
  }

</style>
