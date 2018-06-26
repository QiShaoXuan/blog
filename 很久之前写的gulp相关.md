

###1.安装
```
cnpm install --save-dev gulp 
```
###2.使用
```
gulp    打包
gulp taskname   执行自定义的某个gulp任务
```
###3.API
####——需要知道四个API：gulp.task , gulp.src , gulp.dest , gulp.watch
####3.1 gulp.src
获取文件（以进行操作)
```
gulp.src(globs[, options])
```
globs参数是文件匹配模式(类似正则表达式)，用来匹配文件路径(包括文件名)，当然这里也可以直接指定某个具体的文件路径。当有多个匹配模式时，该参数可以为一个数组。

options为可选参数。通常情况下我们不需要用到。

* `*` 匹配文件路径中的0个或多个字符，但不会匹配路径分隔符，除非路径分隔符出现在末尾
* `**` 匹配路径中的0个或多个目录及其子目录,需要单独出现，即它左右不能有其他东西了。如果出现在末尾，也能匹配文件。
* `?` 匹配文件路径中的一个字符(不会匹配路径分隔符)
* `[...]` 匹配方括号中出现的字符中的任意一个，当方括号中第一个字符为`^`或`!`时，则表示不匹配方括号中出现的其他字符中的任意一个，类似js正则表达式中的用法
* `!(pattern|pattern|pattern)` 匹配任何与括号中给定的任一模式都不匹配的
* `?(pattern|pattern|pattern)` 匹配括号中给定的任一模式0次或1次，类似于js正则中的(pattern|pattern|pattern)?
* `+(pattern|pattern|pattern)` 匹配括号中给定的任一模式至少1次，类似于js正则中的(pattern|pattern|pattern)+
* `*(pattern|pattern|pattern)` 匹配括号中给定的任一模式0次或多次，类似于js正则中的(pattern|pattern|pattern)*
* `@(pattern|pattern|pattern)` 匹配括号中给定的任一模式1次，类似于js正则中的(pattern|pattern|pattern)

此外，还可以使用展开模式。展开模式以花括号作为定界符，根据它里面的内容，会展开为多个模式，最后匹配的结果为所有展开的模式相加起来得到的结果。展开的例子如下：

* `a{b,c}d` 会展开为 `abd`,`acd`
* `a{b,}c` 会展开为 `abc`,`ac`
* `a{0..3}d` 会展开为 `a0d`,`a1d`,`a2d`,`a3d`
* `a{b,c{d,e}f}g` 会展开为 `abg`,`acdfg`,`acefg`
* `a{b,c}d{e,f}g` 会展开为 `abdeg`,`acdeg`,`abdeg`,`abdfg`

当有多种匹配模式时可以使用数组
```
//使用数组的方式来匹配多种文件
gulp.src(['js/*.js','css/*.css','*.html'])
```
####3.2 gulp.dest
输出文件（在文件进行操作后）
```
gulp.dest(path[,options])
```
path为写入文件的路径

options为一个可选的参数对象，通常我们不需要用到

要想使用好gulp.dest()这个方法，就要理解给它传入的路径参数与最终生成的文件的关系。

gulp的使用流程一般是这样子的：首先通过gulp.src()方法获取到我们想要处理的文件流，然后把文件流通过pipe方法导入到gulp的插件中，最后把经过插件处理后的流再通过pipe方法导入到gulp.dest()中，gulp.dest()方法则把流中的内容写入到文件中，这里首先需要弄清楚的一点是，我们给gulp.dest()传入的路径参数，只能用来指定要生成的文件的目录，而不能指定生成文件的文件名，它生成文件的文件名使用的是导入到它的文件流自身的文件名，所以生成的文件名是由导入到它的文件流决定的，即使我们给它传入一个带有文件名的路径参数，然后它也会把这个文件名当做是目录名，例如：
```
    var gulp = require('gulp');
    gulp.src('script/jquery.js')
        .pipe(gulp.dest('dist/foo.js'));
    //最终生成的文件路径为 dist/foo.js/jquery.js,而不是dist/foo.js
```
要想改变文件名，可以使用插件gulp-rename

下面说说生成的文件路径与我们给`gulp.dest()`方法传入的路径参数之间的关系。

`gulp.dest(path)`生成的文件路径是我们传入的path参数后面再加上`gulp.src()`中有通配符开始出现的那部分路径。
如果没有通配符，那么输出路径就是`gulp.dest(path)`中path的路径下
例如：
```
var gulp = reruire('gulp');
//有通配符开始出现的那部分路径为 **/*.js
gulp.src('script/**/*.js')
    .pipe(gulp.dest('dist')); //最后生成的文件路径为 dist/**/*.js
//如果 **/*.js 匹配到的文件为 jquery/jquery.js ,则生成的文件路径为 dist/jquery/jquery.js
```
通过指定`gulp.src()`方法配置参数中的base属性，我们可以更灵活的来改变`gulp.dest()`生成的文件路径。
当我们没有在`gulp.src()`方法中配置base属性时，base的默认值为通配符开始出现之前那部分路径，例如：
```
gulp.src('app/src/**/*.css') //此时base的值为 app/src
```
上面我们说的gulp.dest()所生成的文件路径的规则，其实也可以理解成，用我们给gulp.dest()传入的路径替换掉gulp.src()中的base路径，最终得到生成文件的路径。而base的默认属性就是`gulp.src()`中有通配符开始出现的那部分路径或者是`gulp.src()`中文件前的路径（没有出现通配符的情况下）

所以改变base路径后，gulp.dest()生成的文件路径也会改变
```
gulp.src(script/lib/*.js) //没有配置base参数，此时默认的base路径为script/lib
    //假设匹配到的文件为script/lib/jquery.js
    .pipe(gulp.dest('build')) //生成的文件路径为 build/jquery.js

gulp.src(script/lib/*.js, {base:'script'}) //配置了base参数，此时base路径为script
    //假设匹配到的文件为script/lib/jquery.js
    .pipe(gulp.dest('build')) //此时生成的文件路径为 build/lib/jquery.js    
```
用`gulp.dest()`把文件流写入文件后，文件流仍然可以继续使用。
####3.3 gulp.task
定义gulp任务
```
gulp.task(name[, deps], fn)
```
name 为任务名

deps 是当前定义的任务需要依赖的其他任务，为一个数组。当前定义的任务会在所有依赖的任务执行完毕后才开始执行。如果没有依赖，则可省略这个参数

fn 为任务函数，我们把任务要执行的代码都写在里面。该参数也是可选的。

在执行多个任务时，可以通过任务依赖实现，即创建一个空的任务来放置其他任务依赖

如果任务相互之间没有依赖，任务会按你书写的顺序来执行，如果有依赖的话则会先执行依赖的任务。

但是如果某个任务所依赖的任务是异步的，就要注意了，gulp并不会等待那个所依赖的异步任务完成，而是会接着执行后续的任务。例如：
```
gulp.task('one',function(){
  //one是一个异步执行的任务
  setTimeout(function(){
    console.log('one is done')
  },5000);
});

//two任务虽然依赖于one任务,但并不会等到one任务中的异步操作完成后再执行
gulp.task('two',['one'],function(){
  console.log('two is done');
});
```
上面的例子中我们执行two任务时，会先执行one任务，但不会去等待one任务中的异步操作完成后再执行two任务，而是紧接着执行two任务。所以two任务会在one任务中的异步操作完成之前就执行了。

那如果我们想等待异步任务中的异步操作完成后再执行后续的任务
有三种方法可以实现：
第一：在异步操作完成后执行一个回调函数来通知gulp这个异步任务已经完成,这个回调函数就是任务函数的第一个参数。
```
gulp.task('one',function(cb){ //cb为任务函数提供的回调，用来通知任务已经完成
  //one是一个异步执行的任务
  setTimeout(function(){
    console.log('one is done');
    cb();  //执行回调，表示这个异步任务已经完成
  },5000);
});

//这时two任务会在one任务中的异步操作完成后再执行
gulp.task('two',['one'],function(){
  console.log('two is done');
})
```
第二：定义任务时返回一个流对象。适用于任务就是操作gulp.src获取到的流的情况。(将流强行带到任务one中，使流在任务one执行完后才能继续)
```
gulp.task('one',function(cb){
  var stream = gulp.src('client/**/*.js')
      .pipe(dosomething()) //dosomething()中有某些异步操作
      .pipe(gulp.dest('build'));
    return stream;
});

gulp.task('two',['one'],function(){
  console.log('two is done');
});
```
第三：返回一个promise对象，例如
```
var Q = require('q'); //一个著名的异步处理的库 https://github.com/kriskowal/q
gulp.task('one',function(cb){
  var deferred = Q.defer();
  // 做一些异步操作
  setTimeout(function() {
     deferred.resolve();
  }, 5000);
  return deferred.promise;
});

gulp.task('two',['one'],function(){
  console.log('two is done');
});
```
####3.4 gulp.watch
监听文件变化，当出现变化时作出指定的task
```
gulp.watch(glob[, opts], tasks)
```
glob 为要监视的文件匹配模式，规则和用法与gulp.src()方法中的glob相同

opts 为一个可选的配置对象，通常不需要用到

tasks 为文件变化后要执行的任务，为一个数组
```
gulp.task('uglify',function(){
  //do something
});
gulp.task('reload',function(){
  //do something
});
gulp.watch('js/**/*.js', ['uglify','reload']);
```
`gulp.watch()`还有另外一种使用方式：
```      
gulp.watch(glob[, opts, cb])
```
glob和opts参数与第一种用法相同

cb参数为一个函数。每当监视的文件发生变化时，就会调用这个函数,并且会给它传入一个对象，该对象包含了文件变化的一些信息，type属性为变化的类型，可以是`added`,`changed`,`deleted`,`path`属性为发生变化的文件的路径
 ```
 gulp.watch('js/**/*.js', function(event){
     console.log(event.type); //变化类型 added为新增,deleted为删除，changed为改变 
     console.log(event.path); //变化的文件的路径
 }); 
 ```
###4.使用插件

####4.1    快速启动插件
 当我们使用插件时，需要将每一个插件require，如果使用的插件较多，那么需要的require会造成代码十分冗长，所以我们最先使用的是`gulp-load-plugins`插件

 `gulp-load-plugins`插件可以自动加载package.json文件里的gulp插件。例如假设你的package.json文件里的依赖是这样的:
 ```
 {
   "devDependencies": {
     "gulp": "~3.6.0",
     "gulp-rename": "~1.2.0",
     "gulp-ruby-sass": "~0.4.3",
     "gulp-load-plugins": "~0.5.1"
   }
 }
 ```
 然后我们可以在`gulpfile.js`中使用`gulp-load-plugins`来帮我们加载插件：
 ```
 var gulp = require('gulp');
 //加载gulp-load-plugins插件，并马上运行它
 var plugins = require('gulp-load-plugins')();
 ```
 然后我们要使用gulp-rename和gulp-ruby-sass这两个插件的时候，就可以使用`plugins.rename`和`plugins.rubySass`来代替了,也就是原始插件名去掉gulp-前缀，之后再转换为驼峰命名。

####4.2    Browsersync
 开启本地货代理服务器，实现同步刷新
 ```
 $ npm install browser-sync gulp --save-dev
 ```
 具体设置查看 <a href="http://www.browsersync.cn/docs/gulp/">Browsersync / 说明文档</a>
####4.3    wiredep
解决bower前端库引入进html的问题
```
$ npm install --save-dev wiredep
```
<a href="https://github.com/taptapship/wiredep">官方说明</a>

<a href="http://www.tuicool.com/articles/2qQbMnN">网上例子</a>
####4.4 del
删除文件和文件夹
```
$ npm install --save-dev gulp del
```
<a href="http://www.gulpjs.com.cn/docs/recipes/delete-files-folder/">官方文档</a>
####4.5 run-sequence
是task有序进行
```
npm install --save-dev run-sequence
```
<a href="https://www.npmjs.com/package/run-sequence">官方文档</a>

#### <a href="http://pinkyjie.com/2015/08/02/commonly-used-gulp-plugins-part-1/">参考文档及更多插件介绍 </a>



