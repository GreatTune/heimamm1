<template>
  <div class="login-centartion">
    <div class="login-left">
      <div class="box-title">
        <div class="left-img">
          <img src="../../assets/login-logo.png" alt="" />
        </div>
        <div class="left-title">黑马面面</div>
        <div class="left-link"></div>
        <div class="left-user">用户登录</div>
      </div>
      <el-form
        class="login-form"
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="43px"
      >
        <!-- 手机号输入框 -->
        <el-form-item prop="phone">
          <el-input
            v-model="ruleForm.phone"
            placeholder="请输入手机号"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码输入框 -->
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="18">
            <!-- 验证码输入框 -->
            <el-form-item prop="code">
              <el-input
                v-model="ruleForm.code"
                placeholder="请输入验证码"
                prefix-icon="el-icon-key"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <img class="code-img" src="../../assets/01.png" alt="" />
          </el-col>
        </el-row>
        <!-- 勾选框 -->
        <el-checkbox v-model="checked" class="form-checked">
          我已阅读并同意
          <el-link type="primary">用户协议</el-link>
          和
          <el-link type="primary">隐私条款</el-link>
        </el-checkbox>
        <el-form-item>
          <el-button class="from-bottom" type="primary" @click="onSubmit"
            >立即创建</el-button
          >
          <el-button class="from-bottom" type="primary">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="login-right">
      <img src="../../assets/login_banner_ele.png" alt="" />
    </div>
  </div>
</template>

<script>
// 手机号验证格式
var validatePhone = (rule, value, callback) => {
  // 如果输入框内容为空
  if (value === '') {
    // 则提示用户输入手机号
    callback(new Error('手机号码不能为空'))
  } else {
    // 判断手机号码格式是否正确
    const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    if (reg.test(value) == true) {
      callback();
    }else {
      // 如果不正确 , 则提示用户格式不对
      callback(new Error('手机号码格式不正确 , 请重新输入!'))
    }
    callback()
  }
}
export default {
  data () {
    return {
      name: 'login',
      // 变量属性
      ruleForm: {
        phone: '', // 手机号
        password: '', // 登录密码
        code: '' // 验证码
      },
      // 输入框自定义校验规则
      rules: {
        phone: [
          { validator: validatePhone, trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 6, max: 18, message: '长度为6~16为数', teigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 4, max: 4, message: '长度为4为数', teigger: 'change' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      window.console.log('submit!')
    }
  }
}
</script>

<style lang="less">
.login-centartion {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  .login-left {
    display: inline-block;
    width: 478px;
    height: 550px;
    padding-top: 48px;
    background: rgba(245, 245, 245, 1);
    box-sizing: content-box;
    .box-title {
      display: flex;
      align-items: center;
      margin-left: 48px;
      .left-img {
        img {
          font-size: 22px;
        }
      }
      .left-title {
        margin-left: 16px;
        margin-right: 14px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
      .left-link {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 12px;
      }
      .left-user {
        font-size: 22px;
        color: rgba(12, 12, 12, 1);
      }
    }
    // 表单css样式
    .login-form {
      margin-top: 27px;
      padding-right: 41px;
      // 验证码
      .el-col {
        .code-img {
          width: 100%;
        }
      }
    }
    // 勾选框
    .form-checked {
      margin-left: 43px;
      margin-bottom: 28px;
    }
    // 点击按钮
    .from-bottom {
      width: 100%;
      margin-left: 0;
      margin-bottom: 26px;
    }
  }
}
</style>
