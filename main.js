var keys = {
    0:['q','w','e','r','t','y','u','i','o','p'],
    1:['a','s','d','f','g','h','j','k','l'],
    2:['z','x','c','v','b','n','m'],
    length:3
}

var hash = {
    'q': 'qq.com', 
    'w': 'weibo.com', 
    'e': 'ele.me', 
    'r': 'renren.com', 
    't': 'tianya.com', 
    'y': 'youtube.com', 
    'u': 'uc.com' ,
    'i': 'iqiyi.com', 
    'o': 'opera.com', 
    'p': 'www.pixiv.net', 
    'z': 'zhihu.com', 
    'm': 'developer.mozilla.org'
}

var hashInLocalStorage = JSON.parse(localStorage.getItem('localHash') || 'null')

if(hashInLocalStorage){
    hash = hashInLocalStorage
}

var main = document.querySelector('#main')
for(var i = 0; i < keys['length']; i++){
    var div = document.createElement('div')
    div.className = 'row'
    main.appendChild(div)
    for (var j = 0; j < keys[i].length; j++) {
        var kbd = document.createElement('kbd')
        kbd.className = 'key'
        var button = document.createElement('button')
        var img = document.createElement('img')
        var span = document.createElement('span')
        span.className = 'text'
        span.textContent = keys[i][j]
        if(hash[keys[i][j]]){
            img.src = 'http://' + hash[keys[i][j]] + '/favicon.ico'
        }else {
            img.src='//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        img.onerror = function(event){
            event.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        button.textContent = '编辑'
        button.id = keys[i][j]

        button.onclick = function(event) {
            var button2 = event['target']
            img2 = button2.previousSibling
            let key = button2['id']
            
            o = prompt('请输入一个网址')
            hash[key] = o

            img2.src = 'http://' + o + '/favicon.ico'
            img2.onerror = function(event){
                event.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
            }
            localStorage.setItem('localHash', JSON.stringify(hash)) 
        }
        kbd.appendChild(span)
        kbd.appendChild(img)
        kbd.appendChild(button)
        div.appendChild(kbd)
    }
}

document.onkeypress = function(event){
    key = event['key']
    website = hash[key]
    console.log("hash[key]",hash[key])
    // location.href = 'http://' + website
    window.open('http://' + website, 'blank_')
}