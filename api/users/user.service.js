const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    
    pool.query(
      `insert into registration(name, email, password, gender, phone) 
                values(?,?,?,?,?)`,
      [
        data.name,
        data.email,
        data.password,
        data.gender,
        data.phone
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, "record inserted");
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    //console.log(email)
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,name, email, gender, phone from registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id,name, email, password, gender, phone from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update registration set name=?, email=?, password=?, gender=?, phone=? where id = ?`,
      [
        data.name,
        data.email,
        data.password,
        data.gender,
        data.phone,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
