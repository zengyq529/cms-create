<template>
    <el-drawer :title="editTitle" :visible.sync="showAlert" width="800px" @close="$emit('close')">
        <div style="padding:0px 20px">
            <el-form ref="form" :model="form" :rules="rules" label-width="100px" size="mini">
                <el-form-item v-for="(item,index) in formKeys" :key="index" :label="addParam[item].label" :prop="item">
                    <component :is="addParam[item].component" v-model="form[item]" :placeholder="addParam[item].placeholder" v-bind="addParam[item].props" style="width:100%"></component>
                </el-form-item>
            </el-form>
            <div class="bottom-absolute">
                <el-button round @click="$emit('close')">取消</el-button>
                <el-button round type="primary" @click="submit">确定</el-button>
            </div>
        </div>
    </el-drawer>
</template>
<script>
import server from "./server";
import pageConfig from "./config";
export default {
    name: "EditAlert",
    components: {},
    props: {
        type: {
            type: String,
            default: ""
        },
        detail: {
            type: Object,
            default: ""
        }
    },
    data() {
        return {
            showAlert: true,
            form: {},
            rules: {},
            sending: false,
            addParam: {},
            addTitle: "",
            updateTitle: ""
        };
    },
    computed: {
        formKeys() {
            return Object.keys(this.form);
        },
        editTitle() {
            return this.detail.id ? this.updateTitle : this.addTitle;
        }
    },
    created() {
        let { addParam = {}, addTitle, updateTitle } = pageConfig[this.type];
        this.addParam = addParam;
        let form = {};
        let rules = {};
        for (let key in addParam) {
            form[key] = this.detail[key] || addParam[key].defaultValue;
            if (addParam[key].check) {
                rules[key] = addParam[key].check;
            }
        }
        this.form = form;
        this.rules = rules;
    },
    methods: {
        submit() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.submitAct();
                } else {
                    return false;
                }
            });
        },
        async submitAct() {
            this.sending = true;
            const { name, label } = this.form;
            const isSus = await (this.detail.id
                ? server.update(this.type, this.detail.id, this.form)
                : server.add(this.type, this.form));
            if (isSus) {
              this.$notify.success('修改成功');
                this.$emit("close", { submitSusccess: true });
            }
            this.sending = false;
        }
    }
};
</script>
<style>
</style>
