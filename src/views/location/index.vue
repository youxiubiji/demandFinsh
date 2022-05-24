<template>
  <p>获得您的坐标</p>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  // h5
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        console.log(res);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("定位失败,用户拒绝请求地理定位");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("定位失败,位置信息是不可用");
            break;
          case error.TIMEOUT:
            alert("定位失败,请求获取用户位置超时");
            break;
          case error.UNKNOWN_ERROR:
            alert("定位失败,定位系统失效");
            break;
        }
      }
    );
  } else {
    alert("浏览器不支持地理定位。");
  }
  //百度地图
  var geolocation = new BMap.Geolocation();
  geolocation.getCurrentPosition((r) => {
    console.log(r);
  });
  // 腾讯地图
  var qqgeolocation = new qq.maps.Geolocation(
    "OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77",
    "myapp"
  );
  qqgeolocation.getLocation((res) => {
    console.log(res);
  });
});
</script>
