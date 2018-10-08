const existingSignup = (req, res) => {
  res.status(200).json({
    success: true,
    message: req.body,
  });
};

module.exports = existingSignup;
