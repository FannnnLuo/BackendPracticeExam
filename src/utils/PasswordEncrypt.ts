
import bcrypt from "bcryptjs";
import {SALT_ROUNDS} from './constant'
export async function verifyPassword(pswdPlain: string, pswdEncrypt: string) {
	const match = await bcrypt.compare(pswdPlain, pswdEncrypt);
	return match;
}
export async function hashPassword(pswd: string) {
	const hashed = await bcrypt.hash(pswd, Number(SALT_ROUNDS));
	return hashed;
}
