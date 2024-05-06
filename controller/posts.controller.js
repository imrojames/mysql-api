const pool = require("../database/index");

const postsController = {

  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query(process.env.GET_ALL_POSTS); // process.env.GET_ALL_POSTS. This to call the GET_ALL_POSTS from .env
      res.json({
        message: "success",
        data: rows
      })
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(process.env.GET_POST_BY_ID, [id]); // process.env.GET_POST_BY_ID. This to call the GET_POST_BY_ID from .env
      res.json({
        message: "success",
        data: rows
      });
    } catch (error) {
      console.log(error)
      res.json({
        state: "error"
      })
    }
  },

  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const sql = process.env.CREATE_POST;
      const [rows, fields] = await pool.query(sql, [title, content]);
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error);
      res.json({
        state: "error"
      })
    }
  },

  updatePost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const { id } = req.params;
      const sql = process.env.UPDATE_POST;
      const [rows, fields] = await pool.query(sql, [title, content, id]);
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error);
      res.json({
        state: "error"
      })
    }
  },

  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(process.env.DELETE_POST, [id]);
      res.json({
        data: rows
      })
    } catch (error) {
      console.log(error);
      res.json({
        state: "error"
      })
    }
  }


}

module.exports = postsController;