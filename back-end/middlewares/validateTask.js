const validateTask = (req, res, next) => {
  const { text } = req.body;

  if (!text) next({ status: 400, message: '"text" is required' });
  if (text.length < 5) {
    next({ status: 422, message: '"text" length must be at least 5 characters long' });
  }
  return next();
};

module.exports = validateTask;
