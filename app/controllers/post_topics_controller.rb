class PostTopicsController < ApplicationController
  def index
    render json: PostTopic.all
  end

  def show
    pt = PostTopic.where(:topic_id => params[:id])
    render json: pt
  end

  def create
    post_topic = PostTopic.create!(post_topic_params)
    render json: post_topic, status: :created
  end


  private

  def post_topic_params
    params.permit(:post_id, :topic_id)
  end

end
