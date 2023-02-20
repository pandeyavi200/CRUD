import express from "express";
import {
  createResource,
  updateResource,
  fetchResource,
  deleteResource,
} from "../controllers/user";
const router = express.Router();

/**
 * @swagger
 * /find/{id}:
 *   get:
 *     description: Get all resources
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the resource to retrieve
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK

 */
router.get("/find/:id", fetchResource);
/**
 * @swagger
 * /create:
 *   post:
 *     description: Create a new resource
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#models/users/userModel'
 *
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/create", createResource);
/**
 * @swagger
 * /update/{id}:
 *   put:
 *     description: Create a new resource
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#models/users/userModel'
 *     responses:
 *       200:
 *         description: OK
 */
router.put("/update/:id", updateResource);
/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     description: Delete a resource by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the resource to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete("/delete/:id", deleteResource);
export { router };
