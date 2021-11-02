class CategoriesController < ApplicationController
  before_action :set_category, only: [:index, :show]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category
  end

  private

  def set_category 
    @category = Category.find(params[:id])
  end
end
