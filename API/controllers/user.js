import bcrypt from 'bcrypt'
import { User } from '../models/user.js';
import { body, validationResult } from 'express-validator'

export async function getUsers(req, res) {
    try {
        const user = await User.findAll({
            atributes: ["id", "firstname", "lastname", "email", "username", "country"],
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function createUser(req, res) {
    const { firstname, lastname, email, username, password, country } = req.body;
    try {
        let user = await User.findOne({
            where: { email }
        })

        if (user) return res.status(400).json({ errors: { msg: "User Already Exists" } })

        let newUser = await User.create(
            {
                firstname,
                lastname,
                email,
                username,
                password: bcrypt.hashSync(password, 10),
                country,
                createAt: new Date(),
                updateAt: new Date()
            },
            {
                fields: ["firstname", "lastname", "email", "username", "password", "country"],
            }
        );
        return res.json(newUser);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}

export async function getUser(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            where: {
                id,
            },
        });
        console.log(user)
        res.json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, username, password } = req.body;

        const user = await User.findByPk(id);
        user.firstname = firstname;
        user.lastname = lastname;
        user.username = username;
        user.password = password;
        await user.save();

        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        await User.destroy({
            where: {
                id,
            },
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}