# mobx教程

来源：[mobx 教程](https://mp.weixin.qq.com/s?__biz=MjM5MDc4MzgxNA==&mid=2458453605&idx=1&sn=0a506769d5eeb7953f676e93fb4d18eb&chksm=b1c2264c86b5af5aa7300a04d55efead6223e310d68e10222cd3577a25c783d3429f00767960&cur_album_id=1556921519803596802&scene=189#wechat_redirect)

## 核心概念

computed 可以将多个可观察数据组合成一个可观察数据；

autorun 可以自动追踪所引用的可观察数据，并在数据发生变化时自动触发；

when 可以设置自动触发变化的时机，是 autorun 的一个变种情况；

reaction 可以通过分离可观察数据声明，以副作用的方式对 autorun 做出改进；
