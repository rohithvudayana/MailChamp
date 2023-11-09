import mongoose from 'mongoose';

const EmailSchema = mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    subject: String,
    body: String,
    date: {
        type: Date,
        required: false
    },
    image: String,
    name: {
        type: String,
        required: false
    },
    starred: {
        type: Boolean,
        required: false,
        default: false
    },
    bin: {
        type: Boolean,
        required: false,
        default: false
    },
    type: {
        type: String,
        required: false,
    }
})

const email = mongoose.model('emails', EmailSchema);

export default email;
