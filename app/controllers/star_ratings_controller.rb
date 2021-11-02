class StarRatingsController < ApplicationController
  before_action :set_star_rating, only: [:show, :update, :destroy]

  # GET /star_ratings
  def index
    @star_ratings = StarRating.all

    render json: @star_ratings
  end

  # GET /star_ratings/1
  def show
    render json: @star_rating
  end

  # POST /star_ratings
  def create
    @star_rating = StarRating.new(star_rating_params)

    if @star_rating.save
      render json: @star_rating, status: :created, location: @star_rating
    else
      render json: @star_rating.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /star_ratings/1
  def update
    if @star_rating.update(star_rating_params)
      render json: @star_rating
    else
      render json: @star_rating.errors, status: :unprocessable_entity
    end
  end

  # DELETE /star_ratings/1
  def destroy
    @star_rating.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_star_rating
      @star_rating = StarRating.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def star_rating_params
      params.require(:star_rating).permit(:rating, :user_id, :product_id)
    end
end
