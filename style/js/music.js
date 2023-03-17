const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    autoplay: true,
    loop: 'all',
    order: 'random',
    audio: [
        {
        name: '君は僕に似ている',
        artist: 'Piano',
        url: 'https://cdn.jsdelivr.net/gh/dhxh/dhxh.github.io@main/style/music/君は僕に似ている.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/dhxh/dhxh.github.io@main/style/music/Rainbow.jpg',
    },
        {
        name: '星の扉',
        artist: 'Piano Cover',
        url: 'https://cdn.jsdelivr.net/gh/dhxh/dhxh.github.io@main/style/music/星の扉.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/dhxh/dhxh.github.io@main/style/music/Rainbow.jpg',
    },
    {
        name: '時代を越える想い',
        artist: 'Piano',
        url: 'https://cdn.jsdelivr.net/gh/dhxh/dhxh.github.io@main/style/music/時代を越える想い.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/dhxh/dhxh.github.io@main/style/music/Rainbow.jpg',
    }
    ]
});