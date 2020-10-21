const Router = require('koa-router');

const router = new Router();

const Jogos = require('./controllers/jogos');
const Auth = require('./controllers/auth');
const Session = require('./middlewares/session');

router.post('/auth', Auth.autenticarUser);

router.get('/classificacao', Jogos.obterClassificacao);
router.get('/jogos', Jogos.listarJogosPorRodada);
router.put('/jogos', Session.verificarSessao, Jogos.editarJogo);

module.exports = router;
