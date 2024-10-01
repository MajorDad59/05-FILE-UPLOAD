const errorHandler = (err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ msg: err.message });
};

export default errorHandler;
