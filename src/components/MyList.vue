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
 * @Date: 2022-06-21 17:56:10
 -->

<style lang='scss' scoped>
.my_list {
  .warp {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    img {
      width: 50px;
      height: 50px;
    }
    div {
      max-width: 60%;
    }
    span {
    }
  }
}
</style>

<template>
  <div class="my_list">
    <div class="warp" v-for="(item, index) in showlist" :key="index">
      <img :src="item.author.avatar_url" alt="" />
      <div>{{ item.title }}</div>
      <span>{{ filterTime(item.create_at) }}</span>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
export default {
  props: {
    showlist: Array,
  },
  components: {},
  setup() {
    const filterTime = (val) => {
      let result;
      let timePublish = new Date(val); // 传入的时间
      let timeNow = new Date(); // 现在的时间
      let minute = 1000 * 60;
      let hour = minute * 60;
      let day = hour * 24;
      let month = day * 30;
      let year = month * 12;
      let diffValue = timeNow - timePublish; // 时间相差的值，是毫秒
      //   console.log(diffValue);
      let diffMonth = diffValue / month;
      let diffWeek = diffValue / (7 * day);
      let diffDay = diffValue / day;
      let diffHour = diffValue / hour;
      let diffMinute = diffValue / minute;
      let diffYear = diffValue / year;
      if (diffValue < minute) {
        result = "刚刚";
      } else if (diffYear > 1) {
        result = parseInt(diffYear) + "年前";
      } else if (diffMonth > 1) {
        result = parseInt(diffMonth) + "月前";
      } else if (diffWeek > 1) {
        result = parseInt(diffWeek) + "周前";
      } else if (diffDay > 1) {
        result = parseInt(diffDay) + "天前";
      } else if (diffHour > 1) {
        result = parseInt(diffHour) + "小时前";
      } else if (diffMinute > 1) {
        result = parseInt(diffMinute) + "分钟前";
      }
      return result;
    };
    return {
      filterTime,
    };
  },
};
</script>
