## 搜狐

```js
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>;

var returnCitySN = { cip: "210.13.118.49", cid: "310000", cname: "上海市" };
```

## H5

```js
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
```

## 百度

```js
// index.html
<script
  type="text/javascript"
  src="https://api.map.baidu.com/api?v=2.0&ak=8t2pG5Gto2V1p5wwlAZj9KEvOyN5yGvs&s=1"
></script>;

// onMounted
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition((r) => {
  console.log(r);
});
```

## 腾讯

```js
// index.html
<script src="https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js"></script>;

//onMounted
var qqgeolocation = new qq.maps.Geolocation(
  "OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77",
  "myapp"
);
qqgeolocation.getLocation((res) => {
  console.log(res);
});
```

## 高德定位

```js

// index.html
  <script type="text/javascript">
    window._AMapSecurityConfig = {
      securityJsCode: '46c603fce222d016c84fc67fed784978',
    }
  </script>
  <script type="text/javascript" src="https://webapi.amap.com/maps?v=2.0&key=3f562e3c47c08b6c49dabf7a3c273288"></script>

  //onMounted
    AMap.plugin("AMap.CitySearch", function () {
    var citySearch = new AMap.CitySearch();
    citySearch.getLocalCity(function (status, result) {
      if (status === "complete" && result.info === "OK") {
        console.log(result);
        // 查询成功，result即为当前所在城市信息
      }
    });
  });
```


## [相关示例](https://github.com/youxiubiji/demandFinsh/tree/main/src/views/location/index.vue)
