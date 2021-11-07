class StarRatingsController < ApplicationController
  before_action :set_star_rating, only: :show
  before_action :authorize_request, only: %i[create update destroy]
  before_action :set_user_star_rating, only: %i[update destroy]

  # 11.5.21 no need for  all star ratings as of yet
  # when we do average rating there will be
  
  # GET /star_ratings - WORKS
  def index
    @star_ratings = StarRating.all

    render json: @star_ratings
  end

  # GET /star_ratings/1 - WORKS
  def show
    render json: @star_rating
  end

  # POST /star_ratings - WORKS
  def create
    @star_rating = StarRating.new(star_rating_params)
    @star_rating.user = @current_user
    @product = Product.find(params[:product_id])
    @star_rating.product = @product
    if @star_rating.save
      render json: @star_rating
    else
      render json: @star_rating.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /star_ratings/1 - WORKS
  def update
    if @star_rating.update(star_rating_params)
      render json: @star_rating
    else
      render json: @star_rating.errors, status: :unprocessable_entity
    end
  end

  # DELETE /star_ratings/1 - WORKS
  def destroy
    @star_rating.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_star_rating
    @star_rating = StarRating.find(params[:id])
  end
  
  def set_user_star_rating
    @star_rating = @current_user.star_ratings.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def star_rating_params
    params.require(:star_rating).permit(:rating, :user_id, :product_id)
  end
end
