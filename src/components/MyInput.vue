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
 * @Date: 2022-06-21 17:34:04
 -->

<style lang='scss' scoped>
.my_input {
  background-color: #444;
  text-align: center;
  padding: 10px;
  h1 {
    color: #fff;
  }
  input {
    width: 60%;
    height: 20px;
    border-radius: 50px;
    padding-left: 10px;
    outline: none;
    background-color: #888888;
    border: none;
  }
}
</style>

<template>
  <div class="my_input">
    <h1>cnode</h1>
    <input type="text" />
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>
