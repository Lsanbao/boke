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
 * @Date: 2022-06-21 17:38:46
 -->

<style lang='scss' scoped>
.my_tab {
  display: flex;
  background-color: #ccc;
  color: #80bd01;
  .warp {
    flex: 1;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }
  .active {
    background-color: #80bd01;
    color: #fff;
  }
}
</style>

<template>
  <div class="my_tab">
    <div
      class="warp"
      v-for="(item, index) in list"
      :key="index"
      :class="{ active: item.val == tabval }"
      @click="tab(item.val)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
export default {
  props: {
    list: Array,
  },
  components: {},
  setup(p, c) {
    const data = reactive({
      tabval: "",
    });
    const tab = (val) => {
      c.emit("tablist", val);
      data.tabval = val;
    };
    return {
      tab,
      ...toRefs(data),
    };
  },
};
</script>
