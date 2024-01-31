import mysql from 'mysql2'

// 连接池
export const getDB = () => {
    return mysql.createPool({
        host: '123.157.129.168',
        port: 1336,
        user: 'jiance',
        password: 'fC3QcK33dley9X9b2JcF1Hcpev9hf91X',
        database: 'jnpf_cloud',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }).promise();
}
