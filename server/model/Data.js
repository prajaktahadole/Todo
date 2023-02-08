const mongoose = require("mongoose");

const TodoDataSchema = new mongoose.Schema({
    task: {
		type: String,
		required: true
	},
	iscomplete: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model("TodoData", TodoDataSchema);
