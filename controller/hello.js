import { User } from "../models/user.js";

export const getUsers = async (req, res) => {
    let users;
    try {
        users = await User.find({});
    } catch (error) {
        return res.json({
            error: error.message
        })
    }
    if (!users || users == "" || users == null) {
        return res.json({
            message: "users data not found"
        });
    }
    return res.status(200).json({
        message: "users data fetched successfully",
        users
    });
}




let user = {
    name: "",
    phone: "",
    address: ""
}

export const createUser = async (req, res) => {
    const { name, phone, address } = req.body;

    if (!name || !phone || !address || name == "" || name == null || phone == "" || phone == null || address == null || address == "") {
        return res.json({
            message: "all feilds are required"
        });
    }
    if (phone.length > 10 || phone.length < 10) {
        return res.json({
            message: "phone number must be 10 digits"
        })
    }

    user.name = name;
    user.phone = phone;
    user.address = address

    if (!user || user === null || user == "") {
        return res.json({
            message: "user not created ",

        });
    }
    let createdUser;
    try {
        createdUser = await User.create(user);
    } catch (error) {
        return res.json(error);
    }

    if (!createdUser || createdUser == null || createdUser == "") {
        return res.status(400).json({
            message: "user data not saved",

        });
    }

    return res.json({
        message: "user created successfully",
        user
    });
}


export const updateUser = async (req, res) => {
    const { id } = req.params;

    if (!id || id == "" || id == null) {
        return res.json({
            message: "user id invalid"
        });
    }

    const { name, phone, address } = req.body;
    let checkUser = {
        name, phone, address
    }

    // if ({ ...checkUser } == null || { ...checkUser } == "" || !{ ...checkUser }) {
    //     return res.json({
    //         message: "all feilds are required"
    //     });
    // }
    
    if (!name || !phone || !address || name == "" || name == null || phone == "" || phone == null || address == null || address == "") {
    return res.json({
        message: "all feilds are required"
    });
    }
    // let user;
    if (phone.length > 10 || phone.length < 10) {
        return res.json({
            message: "phone number must be 10 digits"
        });
    }
    // console.log("user  not updated yet")
    // console.log(user);
    let user;
    try {
        user = await User.findByIdAndUpdate({ _id: id }, {
            name,
            phone,
            address
        });
    } catch (error) {
        return res.json({
            message: error.message,
        });
    }
    if (!user || user == "" || user == null) {
        return res.json({
            message: "user not updated"
        });
    }

    return res.json({
        message: "user updated successfully",
        user
    });
}



export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!id || id == "" || id == null) {
        return res.status(400).json({
            message: "user id invalid"
        });
    }

    let user;
    try {
        user = await User.findByIdAndDelete({ _id: id });
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
    if (!user || user == "" || user == null) {
        return res.json({
            message: "user not deleted"
        });
    }
    return res.json({
        message: "user deleted successfully",
        user
    });
}