<!--
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 * 
 * @author: sanbao
 * @Date: 2022-06-21 17:29:30
 -->

<style lang='scss' scoped>
.nav {
  height: calc(100vh - 100px);
  overflow: auto;
}
</style>

<template>
  <div class="home">
    <my-input></my-input>
    <div class="nav">
      <my-tab :list="list" @tablist="tablist"></my-tab>
      <my-list :showlist="showlist"></my-list>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch } from "vue";
import MyInput from "../components/MyInput.vue";
import MyTab from "../components/MyTab.vue";
import axios from "axios";
import MyList from "../components/MyList.vue";
export default {
  components: { MyInput, MyTab, MyList },
  setup() {
    const data = reactive({
      list: [
        { name: "全部", val: "" },
        { name: "精华", val: "good" },
        { name: "分享", val: "share" },
        { name: "问答", val: "ask" },
        { name: "招聘", val: "job" },
        { name: "测试", val: "kehu" },
      ],
      alllist: [],
      showlist: [],
      tab: "",
    });
    const tablist = (val) => {
      data.tab = val;
    };
    axios.get("list.json").then((res) => {
      data.alllist = res.data.data;
      data.showlist = res.data.data;
    });
    watch(
      () => data.tab,
      (newVal) => {
        data.showlist = data.alllist.filter((v) => v.tab.includes(newVal));
      }
    );
    return {
      ...toRefs(data),
      tablist,
    };
  },
};
</script>
