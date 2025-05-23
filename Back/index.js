const mariadb = require('mariadb');
const express = require('express');
const cors = require('cors');
const app = express();

const pool = mariadb.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'portfolio',
	connectionLimit: 10,
});

const getAboutmeData = async () => {
	let conn = await pool.getConnection();
	const data = await conn.query('SELECT * FROM aboutme');
	conn.release();
	return data;
};
const getAwardData = async () => {
	let conn = await pool.getConnection();
	const data = await conn.query('SELECT * FROM award');
	conn.release();
	return data;
};
const getEducationsData = async () => {
	let conn = await pool.getConnection();
	const data = await conn.query('SELECT * FROM educations');
	conn.release();
	return data;
};
const getProjectData = async () => {
	let conn = await pool.getConnection();
	const data = await conn.query('SELECT * FROM project');
	conn.release();
	return data;
};
const getSkillsData = async () => {
	let conn = await pool.getConnection();
	const data = await conn.query('SELECT * FROM skills');
	conn.release();
	return data;
};

app.use(cors());
app.use(express.json());

app.get('/aboutme', async (req, res) => {
	const data = await getAboutmeData();
	res.json(data);
});
app.get('/award', async (req, res) => {
	const data = await getAwardData();
	res.json(data);
});
app.get('/educations', async (req, res) => {
	const data = await getEducationsData();
	res.json(data);
});
app.get('/project', async (req, res) => {
	const data = await getProjectData();
	res.json(data);
});
app.get('/skills', async (req, res) => {
	const data = await getSkillsData();
	res.json(data);
});

app.listen(8080, () => {
	console.log('서버 실행중');
});
