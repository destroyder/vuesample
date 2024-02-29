<template>
  <h3 class="design-title">2020年 ギフト商材ECサイトバナー</h3>
  <p class="design-read">
    下記のバナーは、ギフト商材ECサイトにて特集コンテンツ誘導のためのバナーです。<br />
    さまざまな特集・商材があるので、それぞれの内容に沿ったデザインになるようにしております。<br />
  </p>
  <ul class="design">
    <li><img :src="designImg03" loading="lazy" class="flow_img" alt="" /></li>
    <li><img :src="designImg10" loading="lazy" class="flow_img" alt="" /></li>
    <li><img :src="designImg05" loading="lazy" class="flow_img" alt="" /></li>
    <li><img :src="designImg06" loading="lazy" class="flow_img" alt="" /></li>
    <li><img :src="designImg07" loading="lazy" class="flow_img" alt="" /></li>
    <li><img :src="designImg08" loading="lazy" class="flow_img" alt="" /></li>
    <li><img :src="designImg09" loading="lazy" class="flow_img" alt="" /></li>
    <li><img :src="designImg04" loading="lazy" class="flow_img" alt="" /></li>
  </ul>

  <h3 class="design-title">2018年 製薬会社 メディアサイトバナー</h3>
  <p class="design-read">
    製薬会社のメディアサイトのバナーです。広告用や内部回遊のためのバナーです。<br />
    制作意図としては、製薬系ということで、直線系のやや硬めなあしらいにしつつ、色味は柔らかくして<br />
    硬すぎる印象にならないようにしました。
  </p>
  <ul class="design">
    <li><img :src="designImg01" loading="lazy" class="flow_img" alt="" /></li>
    <li><img :src="designImg02" loading="lazy" class="flow_img" alt="" /></li>
  </ul>

  <h3 class="design-title">2017年 CtoCアプリのLPデザイン</h3>
  <p class="design-read">
    CtoC向けのアプリのLPデザインとコーディングを担当しました。<br />
    ページの役割としては、観光地の近辺の駐車場を表示するものなので、<br />
    情報の優先順位を考慮しデザインを行いました。
  </p>
  <ul class="design design-lp">
    <li><img :src="designImg11" loading="lazy" class="flow_img" alt="" /></li>
  </ul>
</template>

<script setup lang="ts">
import designImg01 from "../assets/img/design01.png";
import designImg02 from "../assets/img/design02.png";
import designImg03 from "../assets/img/design03.png";
import designImg04 from "../assets/img/design04.png";
import designImg05 from "../assets/img/design05.jpg";
import designImg06 from "../assets/img/design06.jpg";
import designImg07 from "../assets/img/design07.jpg";
import designImg08 from "../assets/img/design08.jpg";
import designImg09 from "../assets/img/design09.jpg";
import designImg10 from "../assets/img/design10.jpg";
import designImg11 from "../assets/img/design11.png";
</script>

<style lang="scss" scoped>
h3.design-title {
  margin: 30px 0 15px 30px;
  font-size: 18px;
}
.design-read {
  margin: 0 0 30px 30px;
}
.design {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  list-style: none;
  padding-right: 30px;
  margin-bottom: 60px;
  box-sizing: border-box;
  &.design-lp {
    max-width: 300px;
  }

  img {
    max-width: 100%;
  }
  li {
    flex: 1 0 calc(25%);
    box-sizing: border-box;
    padding: 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
}
</style>
