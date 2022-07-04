import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usefulLinksSchema = new Schema({
	linkTitle: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true
	}
})


const HomeworkSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	deadline: {
		type: Date,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	classId: {
		type: Number,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: false
	},
	usefulLinks: [usefulLinksSchema]
})

export const Homework = mongoose.model('Homework', HomeworkSchema)


