import { Request, Response } from "express";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Zod schemas for validation purposes

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  tags: z.array(z.string()).optional(),
});

const idParamSchema = z.object({
  id: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Invalid ID format",
  }),
});

const tagParamSchema = z.object({
  tag: z.string().min(1, "Tag is required"),
});

export const createPost = async (req: Request, res: Response): Promise<any> => {
  try {
    const result = postSchema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: result.error.errors });
    }
    const { title, content } = result.data;

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

export const deletePost = async (req: Request, res: Response): Promise<any> => {
  try {
    const result = idParamSchema.safeParse(req.params);
    if (!result.success) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: result.error.errors });
    }
    const { id } = result.data;

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

export const updatePost = async (req: Request, res: Response): Promise<any> => {
  try {
    const paramsResult = idParamSchema.safeParse(req.params);
    const bodyResult = postSchema.safeParse(req.body);

    if (!paramsResult.success) {
      return res.status(400).json({
        message: "Validation error",
        errors: paramsResult.error.errors,
      });
    }
    if (!bodyResult.success) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: bodyResult.error.errors });
    }
    const { id } = paramsResult.data;
    const { title, content } = bodyResult.data;

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

export const topRated = async (req: Request, res: Response): Promise<any> => {
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

export const viewedBlog = async (
  req: Request,
  res: Response
): Promise<any> => {};

export const getByTag = async (req: Request, res: Response): Promise<any> => {
  try {
    const result = tagParamSchema.safeParse(req.params);
    if (!result.success) {
      return res
        .status(400)
        .json({ message: "Validation error", errors: result.error.errors });
    }
    const { tag } = result.data;
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
