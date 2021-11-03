class ProductsController < ApplicationController
  before_action :set_product, only: :show
  
  # DUCHESS
  # GET /products
  # def index
  #   @products = Product.all

  #   render json: @products
  # end

  # GET /products/1
  def show
    render json: @product
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end
end
