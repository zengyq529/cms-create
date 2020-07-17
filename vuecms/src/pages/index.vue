<template>
    <el-container style="height:100%;border: 1px solid #eee">
        <el-header style="background-image: linear-gradient(to right, #409eff, rgb(240, 242, 245))">
            <div class="head-title">XX管理系统</div>
            <div class="userinfo">
                <img src="/static/usericon.png" />
                <span>欢迎你:adminname</span>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu style="border-right:0px" :default-openeds="['1']" :router="true" background-color="#f2f2f2" active-text-color="#409eff" text-color="#000">
                    <el-submenu v-for="(item,index) in menu" :key="index" :index="item.index">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            {{item.name}}
                        </template>
                        <el-menu-item-group>
                            <el-menu-item v-for="(val,index2) in item.children" :key="index2" :index="item.index + '-' + val.index" :route="val.route">{{val.name}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main style="background:#f5f8f9">
                <el-breadcrumb separator="/" style="margin-bottom:10px">
                    <el-breadcrumb-item>水务系统</el-breadcrumb-item>
                    <el-breadcrumb-item>{{currentName}}</el-breadcrumb-item>
                </el-breadcrumb>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    data() {
        return {
            currentName: "",
            menu: [
                {
                    name: "管理系统",
                    index: "1",
                    children: [
                        {
                            index: "1",
                            name: "人员管理",
                            route: "/server/page/user"
                        }
                    ]
                }
            ]
        };
    },
    created() {
        let path = this.$route.path;
        this.menu.forEach(item=>{
          item.children.forEach(val=>{
            if(val.route==path){
              this.currentName = val.name;
            }
          })
        })
    }
};
</script>

<style lang="scss">
@font-face {
    font-family: TRENDS;
    src: url("/static/font.ttf");
}
.head-title {
    float: left;
    line-height: 59px;
    font-family: TRENDS;
    font-size: 22px;
    color: white;
    text-decoration: none;
    cursor: pointer;
}
.userinfo {
    float: right;
    color: rgba(0, 0, 0, 0.65);
    font-size: 16px;
    display: flex;
    align-items: center;
    height: 100%;
    img {
        margin-right: 10px;
        width: 24px;
        height: 24px;
        border-radius: 12px;
    }
}
</style>