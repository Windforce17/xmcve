<template>
  <div id="app">
    <div id="xmlayout">
      <a-layout>

        <a-layout-header :style="layout_style">
          <a-row>
            <a-col :span="3">
              <div class="logo" />
            </a-col>
            <a-col
              :span="5"
              :style="{
                textAlign:'center',
                textSize:'20px',
                fontSize:'20px'
                }"
            >
              星盟安全团队
            </a-col>
            <a-col>

              <a-menu
                theme="light"
                mode="horizontal"
                v-model="current"
                @click="jump_to"
              >

                <a-menu-item key="Home">首页</a-menu-item>

                <a-menu-item key="about_us">关于我们</a-menu-item>

                <a-menu-item key="open_platform">开放平台</a-menu-item>

                <a-menu-item key="time_line">时间轴</a-menu-item>

                <a-menu-item key="contact_us">联系我们</a-menu-item>

                <a-menu-item key="partner">合作伙伴</a-menu-item>

              </a-menu>
            </a-col>

          </a-row>

        </a-layout-header>
        <router-view></router-view>
        <a-layout-content></a-layout-content>
        <a-layout-footer style="text-align: center">
          星盟安全团队
        </a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      current: ["Home"],
      jump_map: {
        Home: "/home",
        about_us: "/about",
        open_platform: "/platform",
        time_line: "/timeline",
        contact_us: "/contact",
        partner: "/partner"
      },
      layout_style: {
        backgroundColor: "rgb(255,255,255)"
      }
    };
  },
  methods: {
    jump_to: function(p) {
      if (this.$router.currentRoute.path != this.jump_map[p.key]) {
        this.$router.push(this.jump_map[p.key]);
      }
    }
  }
};
</script>

<style>
#xmlayout .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
