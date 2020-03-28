<template>
  <div id="app">
    <a-layout>
      <a-layout-header :style="{
        backgroundColor: 'rgb(255,255,255)'
      }">
        <a-row>
          <a-col>
            <img
              class="logo"
              src='~@/assets/img/logo.jpg'
              id='xmLogo'
            >
          </a-col>

          <a-col :span='4'>

            <div :style="{
                textAlign:'center',
                textSize:'20px',
                fontSize:'20px',
                top:'-6px'
                }">
              星盟安全团队
            </div>
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
      <a-layout-content id='content'>
        <router-view></router-view>

      </a-layout-content>

      <a-layout-footer style="text-align: center">
        星盟安全团队
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   // HelloWorld
  // },
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
#xmLogo {
  width: 80px;
  height: 64px;
  /* background: rgba(0, 0, 0, 0.2); */
  /* margin: 16px 24px 16px 0; */
  float: left;
}
#content {
  margin: 20px;
  height: 600px;
  position: relative;
}
</style>
