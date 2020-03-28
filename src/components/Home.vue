<template>
  <div id='Home'>
    <a-row
      type='flex'
      align="middle"
    >
      <a-col :span="12">
        <v-chart :options="ablilityRadar" />
      </a-col>
      <a-col :span="12">
        <p ip='xmTeam'>星盟安全团队牛逼星盟安全团队牛逼星盟安全团队牛逼星盟安全团队牛逼星盟安全团队牛逼</p>
      </a-col>
    </a-row>

  </div>
</template>

<script>
import ECharts from "vue-echarts";
// import "echarts/lib/chart/bar";
// import "echarts/lib/component/tooltip";
import "echarts";
// Vue.component('v-chart', ECharts)
export default {
  components: {
    "v-chart": ECharts
  },
  name: "Home",
  data() {
    return {
      ablilityRadarData: {
        source: [{ web: 90, pwn: 80, re: 75, crypto: 45, mobile: 40 }]
      },
      ablilityRadar: {
        title: {
          text: "能力图",
          left: "center"
        },
        radar: {
          indicator: [
            { name: "web", max: 100 },
            { name: "pwn", max: 100 },
            { name: "re", max: 100 },
            { name: "crypto", max: 100 },
            { name: "mobile", max: 100 }
          ]
        },
        dataset: {
          source: [{ web: 90, pwn: 80, re: 75, crypto: 45, mobile: 40 }]
        },
        series: [{ type: "radar" }]
      }
    };
  }
};
</script>
<style >
#home {
  background: "#fff";
  height: 500px;
}
</style>