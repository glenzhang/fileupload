#文件上传

文件上传在web开发中是经常碰到的功能，而用过jQuery的同学应该都会找到插件[jquery.ajaxfileupload.js]()，现在给大家推荐的是来自[webtoolkit](http://www.webtoolkit.info/)的iframe上传，完美支持ie6+,chrome,ff。

##工作原理（步骤）

1. 绑定`input[type=file]`chang事件
2. form绑定submit事件，在submit时动态添加target
3. 当选择上传文件时，触发chang事件，js提交form
4. form的action为上传文件的api, 一定记得`enctype="multipart/form-data"`
5. 动态的创建iframe, name为form的target，这样每次form就是往这个iframe提交
6. 绑定iframe的onload事件，读取返回结果，回传