//@desc : get all bootcamp
//@access : public
//@route :GET /api/v1/bootcamps
exports.getBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, data: [] });
};

//@desc : create bootcamp
//@access : private
//@route :POST /api/v1/bootcamps
exports.createBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "bootcamp created", data: [] });
};

//@desc : get bootcamp
//@access : public
//@route :GET /api/v1/bootcamps/:id
exports.getBootCampById = (req, res, next) => {
  res.status(200).json({ success: true, data: [] });
};

//@desc : delete bootcamp
//@access : private
//@route :DELETE /api/v1/bootcamps
exports.deleteBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "bootcamp deleted", data: [] });
};

//@desc : update bootcamp
//@access : private
//@route :PUT /api/v1/bootcamps:/id
exports.updateBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "bootcamp updated", data: [] });
};
