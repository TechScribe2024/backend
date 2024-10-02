import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    const newPost = await prisma.post.create({
      data: {
        title: title,
        content: content,
        createdAt: new Date(),
      },
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post", error);
    res.status(500).json({ message: "Error creating post" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedPost = await prisma.post.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(deletedPost);
  } catch (error) {
    console.error("Error deleting post", error);
    res.status(500).json({ message: "Error deleting post" });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedPost = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        title: title,
        content: content,
      },
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating post", error);
    res.status(500).json({ message: "Error updating post" });
  }
};

export const topRated = async (req: Request, res: Response) => {
  try {
    const topRatedBlogs = await prisma.post.findMany({
      where: {
        rating: {
          not: null,
        },
      },
      orderBy: {
        rating: "desc",
      },
      take: 10,
    });
    res.status(200).json(topRatedBlogs);
  } catch (error) {
    console.error("error found for top rated blogs");
  }
};

export const viewedBlog = async (req: Request, res: Response) => {};

export const getByTag = async (req: Request, res: Response) => {
  try {
    const { tag } = req.params;
    const postsByTag = await prisma.post.findMany({
      where: {
        tags: {
          some: {
            name: tag,
          },
        },
      },
    });
    if (postsByTag.length === 0) {
      return res.status(404).json({ message: "No posts found for this tag" });
    }
    res.status(200).json(postsByTag);
  } catch (error) {
    console.error("Error found while fetching posts by tag:", error);
    res.status(500).json({ message: "Error fetching posts by tag" });
  }
};
