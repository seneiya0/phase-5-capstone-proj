class PostsController < ApplicationController

    # before_action :authorize, only: [:create, :destroy, :increment_likes, :update]

    def index
        render json: Post.all
    end

    def show
        post = Post.find(params[:id])
        render json: post, status: :accepted
    end

    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post, status: :accepted
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    def increment_likes
        post = Post.find_by(id: params[:id])
        post.update(likes: post.likes + 1)
        render json: post, status: :accepted
    end

    def unlike
        post = Post.find_by(id: params[:id])
        post.update(likes: post.likes - 1)
        render json: post, status: :accepted
    end

    def post_comments
        post = Post.find(params[:id])
        render json: post.comments, status: :ok
    end

    private

    def current_user
        User.find_by(username: params[:username])
    end


    def post_params
        params.permit(:title, :image, :body, :likes, :user_id)
    end

    def authorize
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
end
