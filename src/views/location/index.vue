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
      },
      {
        enableHighAcuracy: true, // 指示浏览器获取高精度的位置，默认为false
        timeout: 5000, // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
        maximumAge: 3000, // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
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

  // 高德地图 https://lbs.amap.com/api/jsapi-v2/guide/services/geolocation
  AMap.plugin("AMap.CitySearch", function () {
    var citySearch = new AMap.CitySearch();
    citySearch.getLocalCity(function (status, result) {
      if (status === "complete" && result.info === "OK") {
        console.log(result);
        // 查询成功，result即为当前所在城市信息
      }
    });
  });
});
</script>
