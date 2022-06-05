from routes.api import api
from flask import request
from app.controllers.api_controller import respondError, respondSuccess
from app.models.blog import Blog
from bin.app import bcrypt
from app.middlewares.api import api as api_middleware
from flask import jsonify
import datetime


@api.route('/blogs', methods=['POST'])
def createBlog():
    blog = Blog(
        title=request.form["title"],
        author=request.form["author"],
        text=request.form["text"],
        imageUrl=request.form["imageUrl"],
        description=request.form["description"]
    )
    blog.save()
    return respondSuccess(str(blog.id) + " created successfully", status=201)


@api.route('/blogs', methods=['GET'])
def getAllBlogs():
    blog = Blog.objects()
    return respondSuccess(data=blog)


@api.route('/blogs/<id>', methods=['GET'])
def getOneBlog(id):
    blog = Blog.objects.get(id=id)
    return respondSuccess(data=blog)


@api.route('/blogs', methods=['PUT'])
def updateBlog():
    blog = Blog.objects.get(id=request.form["id"])
    blog_new = Blog(
        id=request.form["id"],
        title=request.form["title"],
        author=request.form["author"],
        text=request.form["text"],
        imageUrl=request.form["imageUrl"],
        description=request.form["description"],
        created_at=blog.created_at,
        modified_at=datetime.datetime.now()
    )
    blog.delete()
    blog_new.save()
    return respondSuccess(data=request.form["id"] + " updated successfully", status=201)


@api.route('/blogs', methods=['DELETE'])
def delete():
    blog = Blog.objects.get(id=request.form["id"])
    blog.delete()
    return respondSuccess(data=request.form["id"] + " deleted successfully", status=201)
