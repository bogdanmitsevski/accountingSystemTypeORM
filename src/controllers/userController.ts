import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Users } from '../entities/User';
const generateJwt = (id: any, email: any) => {
  return jwt.sign(
    { id, email },
        process.env.SECRET_KEY as string,
        { expiresIn: '24h' }
  );
};
class UserController {
  async Registration(req: express.Request, res: express.Response) {
    const { email, password } = req.body;
    const checkUser = await Users.findOne({
      where: { email: email }
    });
    if (checkUser) {
      res.json(`User with email ${email} was already created`);
    } else {
      const hashPassword = await bcrypt.hash(password, 8);
      const newUser = await Users.create({
        email: email,
        password: hashPassword
      });
      const token = generateJwt(newUser.id, newUser.email);
      await newUser.save();
      res.json(`New USER WITH EMAIL: ${email} was successfully created with Token ${token}`);
    }
  }

  async Login(req:express.Request, res:express.Response) {
    const { email, password } = req.body;

    const checkUser:any = await Users.findOne({
      where: { email: email }
    });

    let comparePassword = bcrypt.compareSync(password, checkUser.password);

    if (!checkUser) {
      res.status(400).json(`User with ${email} not found`);
    } else if (!comparePassword) {
      res.status(400).json('Invalid password');
    } else {
      const token = generateJwt(checkUser.id, checkUser.email);
      res.json({ message: `User with EMAIL: ${email} was successfully logined with ${token} TOKEN` });
    }
  }
}

export default new UserController();
