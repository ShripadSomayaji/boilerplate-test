const router = require('express').Router();

router.get("/sample", (req, res) => {
    res.send({ message: "success", req: req.params });
});

module.exports = router;