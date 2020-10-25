const Router = require('koa-router');

const router = new Router();

const Jogos = require('./controllers/jogos');
const Auth = require('./controllers/auth');
const Session = require('./middlewares/session');

router.post('/auth', Auth.autenticarUser);

router.get('/classificacao', Jogos.obterClassificacao);
router.get('/jogos', Jogos.listarJogosPorRodada);
router.put('/jogos', Session.verificarSessao, Jogos.editarJogo);
router.post('/jogos', Session.verificarSessao, Jogos.criarJogo);
router.delete('/jogos', Session.verificarSessao, Jogos.excluirJogo);

module.exports = router;
