import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        // Remove the unique: true constraint
    },
    email: {
        type: String,
        required: true,
        unique: true  // This should remain unique
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

export default User;
