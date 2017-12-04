var links = [{
        target: '_qrcode',
        url: 'http://harttle.com',
        color: '#fff',
        background: '#b5b5b5',
        icon: 'fa-code-fork'
    }, {
        target: '_blank',
        icon: 'fa-cloud'
    },{
        plugin: 'facebook',
        args: {

        }
    },{
        plugin: 'google-plus',
        args: {

        }
    }, {
        plugin: 'weibo', 
        args: {

        }
    }, {
        plugin: 'wechat'
    }, {
        plugin: 'qrcode'
    }, {
        plugin: 'linkedin',
        args: {

        }
    }, {
        plugin: 'rss',
        url: 'https://bbill.github.io/feeds/all.atom.xml'
    }, {
        plugin: 'github',
        args: {

        }
    }, {
        plugin: 'twitter',
        args: {
            id: ''
        }
    }];

// window.socialShare(document.getElementById('xs'), links, { size: 'xs' });
// window.socialShare(document.getElementById('sm'), links, { size: 'sm' });
window.socialShare(document.getElementById('md'), links);
// window.socialShare(document.getElementById('lg'), links, { size: 'lg' });
