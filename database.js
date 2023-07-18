const { Client } = require('pg');
require('dotenv').config();

const URL = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?sslmode=require&options=project%3D${process.env.ENDPOINT_ID}`;

const connect = async (formData) => {
    try {
        const client = new Client(URL);
        await client.connect();

        // console.log(formData)
        await client.query(
            `INSERT INTO satisfacao (pergunta_um, pergunta_dois, pergunta_tres, pergunta_quatro, pergunta_cinco, obs, nome)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [
                formData.p1,
                formData.p2,
                formData.p3,
                formData.p4,
                formData.p5,
                formData.obs,
                formData.nome
            ]
        );

        await client.end();
    } catch (error) {
        console.log(error);
    }
};


module.exports = { connect };
