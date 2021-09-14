var hello = {
    sayHello: function(onFinish){
        console.log('Hello, world');
        onFinish();
    }
}

var name = function() {
    console.log('My name is ...');
}

hello.sayHello(name);