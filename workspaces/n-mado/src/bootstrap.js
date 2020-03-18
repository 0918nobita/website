import Elm from './Main.elm';

const root = document.getElementById('app');

const app = Elm.Main.init({ node: root, flags: ['Tom'] });

app.ports.cache.subscribe(function(data) {
    console.info('received', data);
});

app.ports.activeUsers.send(['Tom', 'Alice', 'Jane']);
