<template>
    <div class="login-container">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>登录</span>
            </div>
            <el-form :model="form" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name" autocomplete="off" size="mini"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password" autocomplete="off" size="mini"></el-input>
                </el-form-item>
                <el-form-item label="登录用户身份" prop="type">
                    <global-type-select v-model="form.type" type="user"></global-type-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import ajax from "@/common/ajax";
export default {
    data() {
        return {
            form: {
                name: "",
                password: "",
                type: 1
            },
            rules: {
                name: [
                    { required: true, message: "请输入用户名", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ],
                type: [
                    { required: true, message: "请输入密码", trigger: "change" }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(async valid => {
                if (valid) {
                    let { data } = await ajax.post(
                        "/api/user/login",
                        this.form
                    );
                    if (data) {
                        this.$router.push("/server/index");
                    }
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style lang="scss">
.login-container {
    background-image: url(/static/TVYTbAXWheQpRcWDaDMu.svg);
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
    width: 100%;
    height: 100%;
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both;
    }
    .box-card {
        width: 480px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
}
</style>