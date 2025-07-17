export const getHello = (req, res) => {
    return res.status(200).json({
        message: "Hello",
        name: "Arvind",
        role: "Mern stack developer",
        company_name: "Hindtech IT Solutions"
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
    return res.json({
        message: "user created successfully",
        user
    });
}


export const updateUser = async (req, res) => {
    let user = {
        name: "ahfuefievind",
        phone: "34567890331274828",
        address: "rtye'uerfe fertfqwefwe ffew"
    }

    const { name, phone, address } = req.body;

    if (!name || !phone || !address || name == "" || name == null || phone == "" || phone == null || address == null || address == "") {
        return res.json({
            message: "all feilds are required"
        });
    }


    if (phone.length > 10 || phone.length < 10) {
        return res.json({
            message: "phone number must be 10 digits"
        });
    }
    console.log("user  not updated yet")
    console.log(user);

    user.name = name;
    user.phone = phone;
    user.address = address;

    if (!user || user == "" || user == null) {
        return res.json({
            message: "user not updated"
        });
    }
    console.log("user updated")
    console.log(user);
    return res.json({
        message: "user updated successfully",
        user
    })


}