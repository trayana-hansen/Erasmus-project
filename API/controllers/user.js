import bcrypt from 'bcrypt'
import { User } from '../models/user.js';
import { body, validationResult } from 'express-validator'
import { createToken, verifyToken } from './JWT.js';
import { DATE } from 'sequelize';

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({
            where: { email }
        })

        if (!user) return res.status(400).json({ errors: { msg: "Invalid Email" } })
        if (bcrypt.compareSync(password, user.password)) {
            const token = createToken(
                {
                    email: user.email,
                    username: user.username,
                    password: user.password,
                    createAt: user.createAt
                },
                true
            )

            res.cookie("refresh_token", token.refresh_token, {
                expire: new DATE(Date.now() + 30 * 24 * 360000),
                httpOnly: true
            })

            return res.json({
                id: user.id,
                email: user.email,
                username: user.username,
                accessToken: token.access_token
            });
        }
        else return res.status(404).json({ errors: { msg: "Incorrenct password!" } })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function createUser(req, res) {
    const { email, username, password } = req.body;
    try {
        let user = await User.findOne({
            where: { email }
        })

        let userByUsername = await User.findOne({
            where: { username }
        })

        if (user) return res.status(400).json({ errors: { msg: "User Already Exists" } })
        if (userByUsername) return res.status(400).json({ errors: { msg: "Username Already Exists" } })

        let newUser = await User.create(
            {
                email,
                username,
                password: bcrypt.hashSync(password, 10),
                createAt: new Date(),
                updateAt: new Date()
            },
            {
                fields: ["email", "username", "password"],
            }
        );

        const token = createToken(
            {
                email: newUser.email,
                username: newUser.username,
                password: newUser.password,
                createAt: newUser.createAt
            },
            true
        )

        res.cookie("refresh_token", token.refresh_token, {
            expire: new DATE(Date.now() + 30 * 24 * 360000),
            httpOnly: true
        })
        return res.json({
            id: newUser.id,
            email: newUser.email,
            username: newUser.username,
            accessToken: token.access_token
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function getUsers(req, res) {
    try {
        const user = await User.findAll({
            atributes: ["id", "email", "username"],
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function getUser(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            where: {
                id,
            },
        });
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
        const { username, password } = req.body;

        let userByUsername = await User.findOne({
            where: { username }
        })

        if (userByUsername) return res.status(400).json({ errors: { msg: "Username Already Exists" } })

        const user = await User.findByPk(id);
        if (password && username) {
            user.username = username;
            user.password = bcrypt.hashSync(password, 10);
            await user.save();
        }
        else if (password) {
            user.password = bcrypt.hashSync(password, 10);
            await user.save();
        }
        else if (username) {
            user.username = username;
            await user.save();
        }
        else {
            return res.status(400).json({ errors: { msg: "Inputs cannot be empty" } })
        }


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