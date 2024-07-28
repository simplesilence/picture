<template>
  <el-container class="container">
<!--    <el-header class="header">Header</el-header>-->
    <el-container>
      <el-aside width="200px">
          <el-menu
              default-active="0"
              class="el-menu-vertical-demo"
              @select="selectMenu">
            <el-menu-item index="0">
              <i class="el-icon-search"></i>
              <span slot="title">查询</span>
            </el-menu-item>
            <el-menu-item index="1">
              <i class="el-icon-picture-outline"></i>
              <span slot="title">图库</span>
            </el-menu-item>
          </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div id="searchpage">
            <search-page/>
          </div>
          <div style="display: none" id="displaypage">
            <display-page/>
          </div>
        </el-main>
<!--        <el-footer>Footer</el-footer>-->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import SearchPage from "@/views/SearchPage.vue";
import DisplayPage from "@/views/DisplayPage.vue";

export default {
  name: 'HomePage',
  components: {SearchPage, DisplayPage},
  data() {
    return {
      idx: 0
    };
  },
  methods: {
    selectMenu(key) {
      // this.show = key === 1 ? true : false
      // console.log(this.show)
      if(key == 0){
        document.getElementById("searchpage").style.display = "block";
        document.getElementById("displaypage").style.display = "none";
      }else{
        document.getElementById("searchpage").style.display = "none";
        document.getElementById("displaypage").style.display = "block";
      }
    }
  }
}
</script>

<style>
.container{
  height: 100vh;
}
.el-aside .el-menu{
  border-right: none !important;
}
.el-aside{
  border-right: solid 1px #e6e6e6
}
</style>