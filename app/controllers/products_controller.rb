class ProductsController < ApplicationController
  before_action :set_product, only: :show

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
    render json: @products
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end
end
