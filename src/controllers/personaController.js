const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('select * from persona p INNER JOIN AUTORIDADINVOLUCRADA AI ON AI.IDPERSONA=p.IDPERSONA', (err, persona) => {
     if (err) {
      res.json(err);
     }
     res.render('persona', {
        data: persona
     });
    });
  });
};

module.exports = controller;
